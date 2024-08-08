import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import CryptoJS from 'crypto-js';
import imgUser from '../../assets/imagens/Mockup Camisa Preta.png';

interface User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    password: string;
    cpf: string;
    status: string;
    photoUser: string;
    purchase: Purchase[];
    isAdmin?: boolean;
}

interface Purchase {
    _id: string;
    userId: string;
    clothingId: string;
    nameUser: string;
    nameClothing: string;
    quantity: string;
    price: number;
    statusPurchase: boolean;
    date: string;
}

interface UserContextType {
    user: Partial<User> | null;
    login: (emailOrUsername: string, password: string) => void;
    logout: () => void;
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const adminUser: User = {
    id: '1',
    fullName: 'Admin John Doe',
    username: 'adminjohndoe',
    email: 'admin.johndoe@example.com',
    password: 'password123',
    cpf: '123.456.789-10',
    status: 'active',
    photoUser: imgUser,
    purchase: [],
    isAdmin: true,
};

const regularUser: User = {
    id: '2',
    fullName: 'Jane Doe',
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'password123',
    cpf: '987.654.321-00',
    status: 'active',
    photoUser: imgUser,
    purchase: [
        {
            _id: 'abc123',
            userId: '2',
            clothingId: 'xyz456',
            nameUser: 'janedoe',
            nameClothing: 'Camisa Branca',
            quantity: '1',
            price: 99.99,
            statusPurchase: true,
            date: '01/08/2024',
        },
    ],
    isAdmin: false,
};

const SECRET_KEY = 'My-k3Y-V3rn@5T-4pP';

export const UserProvider = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<Partial<User> | null>(null);

    useEffect(() => {
        const encryptedUser = sessionStorage.getItem('user');
        if (encryptedUser) {
            const bytes = CryptoJS.AES.decrypt(encryptedUser, SECRET_KEY);
            const decryptedUser = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setUser(decryptedUser);
        }
    }, []);

    const login = (emailOrUsername: string, password: string) => {
        let loggedInUser: User | null = null;

        if ((emailOrUsername === adminUser.email || emailOrUsername === adminUser.username) && password === adminUser.password) {
            loggedInUser = adminUser;
        } else if ((emailOrUsername === regularUser.email || emailOrUsername === regularUser.username) && password === regularUser.password) {
            loggedInUser = regularUser;
        }

        if (loggedInUser) {
            const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(loggedInUser), SECRET_KEY).toString();
            sessionStorage.setItem('user', encryptedUser);
            setUser(loggedInUser);

            window.location.href = loggedInUser.isAdmin ? '/admin' : '/';
        } else {
            alert('Credenciais inválidas!');
            window.location.href = '/login';
        }
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
        window.location.href = '/';
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};