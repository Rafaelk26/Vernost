import { useEffect, useState } from 'react';
import { useUser } from '../../contexts/User';
import { Header } from '../../components/Header';

export function Compras() {
    const { user } = useUser();
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setUserId(user.id || null);
        }
    }, [user]);

    if (!userId) {
        return (
            <>
                <Header />
                <h1>Carregando...</h1>
            </>
        );
    }

    return (
        <>
            <Header />
            <h1>Compras do Usuário {userId}</h1>
            {/* Aqui você pode renderizar as compras do usuário */}
        </>
    );
}
