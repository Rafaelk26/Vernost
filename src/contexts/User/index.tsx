// Development
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import axios from 'axios'
import CryptoJS from 'crypto-js'

interface User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    cpf: string;
    status: boolean;
    photoUser: string;
    isAdmin?: boolean;
}

interface UserContextType {
    user: Partial<User> | null;
    login: (email: string, password: string) => void;
    logout: () => void;
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

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

    // Contexto de logar
    const login = async (email: string, password: string) => {
        try {
            const response = await axios.post('http://localhost:8888/login', {
                email,
                password,
            });

            const loggedInUser = response.data.user;

            if (loggedInUser) {
                const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(loggedInUser), SECRET_KEY).toString();
                sessionStorage.setItem('user', encryptedUser);
                setUser(loggedInUser);

                window.location.href = '/';
            } else {
                alert('Credenciais inválidas!');
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                alert('Credenciais inválidas!');
            } else {
                console.error('Erro ao tentar logar:', error);
                alert('Ocorreu um erro ao tentar logar. Tente novamente mais tarde.');
            }
        }
    };


    // Contexto de deslogar
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