import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import CryptoJS from 'crypto-js';

import imgUser from '../../assets/imagens/Mockup Camisa Preta.png';

// Definindo o tipo do usuário
interface User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    password: string;
    cpf: string;
    status: string;
    photoUser: string;
}

// Definindo o tipo do contexto de usuário
interface UserContextType {
    user: Partial<User> | null;
    login: (emailOrUsername: string, password: string) => void;
    logout: () => void;
}

// Criando contexto com valor padrão
const UserContext = createContext<UserContextType | undefined>(undefined);

// Definindo um usuário fictício
const fakeUser: User = {
    id: '1',
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
    cpf: '123.456.789-10',
    status: 'active',
    photoUser: imgUser,
};

// Tipando o UserProvider props
interface UserProviderProps {
    children: ReactNode;
}

const SECRET_KEY = 'my-very-secure-secret-key';

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
        if ((emailOrUsername === fakeUser.email || emailOrUsername === fakeUser.username) && password === fakeUser.password) {
            const loggedInUser = {
                id: fakeUser.id,
                fullName: fakeUser.fullName,
                email: fakeUser.email,
                photoUser: fakeUser.photoUser,
            };
            setUser(loggedInUser);
            const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(loggedInUser), SECRET_KEY).toString();
            sessionStorage.setItem('user', encryptedUser);
        } else {
            alert('Credenciais inválidas!');
        }
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar o contexto do usuário
export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
