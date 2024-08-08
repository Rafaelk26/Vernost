import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Context
import { useUser } from '../../../contexts/User';

// Logo
import Logo from '../../../assets/Logo/Vernost-Black.png';
import LogoWhite from '../../../assets/Logo/Vernost-White.png';

import { IoMenu } from "react-icons/io5";

export function Header() {
    // Variável para tamanho da janela
    const [screen, setScreen] = useState<boolean>(false);
    // Variável para clicar no botão menu
    const [menu, setMenu] = useState<boolean>(false);

    const { user, logout } = useUser();

    // Função para condicional do header
    const handleResizing = useCallback(() => {
        if (window.innerWidth < 600) {
            setScreen(true);
        } else {
            setScreen(false);
        }
    }, []);

    useEffect(() => {
        // Escuta o evento de redimensionamento
        window.addEventListener('resize', handleResizing);

        // Verifica o tamanho inicial da tela
        handleResizing();

        // Limpa o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', handleResizing);
        };
    }, [handleResizing]);

    return (
        <header className='w-full h-20 flex items-center relative mx-auto bg-white'>
            {/* Mobile */}
            {screen ? (
                <>
                    <nav className='w-full flex justify-between items-center px-4'>
                        {/* Menu */}
                        <button
                            onClick={() => setMenu(!menu)}
                            className='absolute left-3'>
                            <IoMenu size={30} fill='#000' color='#000' />
                        </button>
                        {/* Logo */}
                        <img
                        className='w-32 mx-auto'
                        src={Logo}
                        alt="Vernost Original" />

                        {user ? (
                            <div className="flex items-center gap-4">
                                <a href="/admin">
                                    <img className='w-8 h-8 rounded-full' src={user.photoUser} alt={user.fullName} />
                                </a>
                            </div>
                        ) : <></>}
                    </nav>

                    {menu && (
                        <div className='fixed inset-0 bg-black opacity-95 flex justify-center z-50 p-4'>
                            <div className='w-full flex flex-col items-center px-4'>

                                <Link to={'/admin'} className='absolute top-7'>
                                    <img
                                    className='w-28'
                                    src={LogoWhite}
                                    alt="Vernost Original" />
                                </Link>

                                <button
                                    onClick={() => setMenu(false)}
                                    className='text-white font-bold text-2xl absolute right-16 top-10'>
                                    X
                                </button>


                                <div className='w-full h-full mt-40 flex flex-col items-center gap-6'>
                                    <button onClick={logout} className="w-56 p-2 text-white Ky transition-all bg-red-500 rounded-md
                                    hover:font-semibold">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <>
                    {/* Desktop */}
                    <nav className='w-full flex justify-between items-center px-2'>
                        {/* Header left */}
                        <div className='flex gap-6 items-center'>
                            <a href="/admin" className="text-black mt-1 text-lg Ky transition-all ms-8
                            hover:font-semibold">
                                Admin
                            </a>
                        </div>

                        {/* Header center */}
                        <div className='flex justify-center'>
                            <Link to={'/admin'}>
                                <img
                                    className='w-36'
                                    src={Logo}
                                    alt="Vernost Original" />
                            </Link>
                        </div>

                        {/* Header right */}
                        <div className='flex items-center gap-14 pe-10'>
                            {user ? (
                                <div className="flex items-center gap-4">
                                    <a href="/admin">
                                        <img className='w-8 h-8 rounded-full' src={user.photoUser} alt={user.fullName} />
                                    </a>
                                    <button onClick={logout} className="text-black Ky transition-all hover:font-semibold">
                                        Logout
                                    </button>
                                </div>
                            ) : <></>}
                        </div>
                    </nav>
                </>
            )}
        </header>
    );
}
