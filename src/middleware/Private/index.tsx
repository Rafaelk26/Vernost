import { ReactNode, useEffect, useState } from 'react';
import { useUser } from '../../contexts/User';
import { useNavigate } from 'react-router-dom';

// Page
import { Direitos } from '../../pages/Direitos'

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps) {
    const { user } = useUser();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (user) {
            setLoading(false);
            return
        }

    }, [user, navigate]);

    return user?.isAdmin && !loading ? <>{children}</> : <><Direitos /></>;
}
