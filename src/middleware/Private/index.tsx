// Development
import { ReactNode, useEffect } from 'react';

interface privateProps{
    children: ReactNode;
}

export function Private({ children }: privateProps){

    useEffect(()=> {
        alert('PASSOU PELO MIDDLEWARE PRIVATE');
    },[])

    return(
        <>
            {children}
        </>
    )
}