// Development
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useUser } from '../../contexts/User'

// Components
import { Header } from '../../components/Header'
import { Card } from '../../components/pages/Compras/CardPurchase'

// Image
import notLogged from '../../assets/imagens/NoLogged.png'

// Icons
import { IoIosLogOut } from "react-icons/io"
import { FaWpforms } from "react-icons/fa"

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
                <div className='flex items-center justify-center h-screen w-full flex-col -mt-10'>
                    <h1 className='Ky text-2xl mb-4'>Faça login para ver suas compras!</h1>
                    <div className='w-full h-64 max-w-lg flex bg-white rounded-tl-3xl rounded-br-3xl
                    md:gap-8'>
                        {/* Photo NoLogged */}
                        <div className='w-60 h-full rounded-tl-3xl'>
                            <img 
                            className='w-full h-full object-cover rounded-tl-3xl'
                            src={notLogged} 
                            alt="Ops.. Não há login..." />
                        </div>
                        {/* Buttons actions */}
                        <div className='w-full max-w-52 py-4 flex flex-col'>
                            <h1 className='Ky text-2xl text-black'>Acessar</h1>
                            <div className='w-full mt-6 flex flex-col justify-center items-center gap-6'>
                                <a href={'/login'}>
                                    <button className='w-44 bg-red-600 text-white
                                    text-xl flex items-center justify-center Ky mt-1 py-1 px-4
                                    gap-4 rounded-[4px]'>
                                        <IoIosLogOut
                                            size={24}
                                            fill='#fff'
                                        />
                                        Login
                                    </button>
                                </a>

                                {/* Botão Cadastro */}
                                <a href={'/cadastro'}>
                                    <button className='w-44 bg-blue-950 text-white
                                    text-xl flex items-center justify-center Ky mt-1 py-1 px-4
                                    gap-4 rounded-[4px]'>
                                        <FaWpforms
                                            size={20}
                                            fill='#fff'
                                        />
                                        Cadastro
                                    </button>
                                </a>
                            </div>
                            <footer className='relative -bottom-10 mx-auto'>
                                <Link 
                                className='Ky text-sm text-black'
                                to={'/'}>Voltar ao início</Link>
                            </footer>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <h1>Compras do Usuário {userId}</h1>
            <div className='w-full mx-auto mt-16 px-8 grid grid-cols-3 justify-items-center gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}
