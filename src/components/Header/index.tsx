// Header.js
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

// Conte
import { useCart } from '../../contexts/Cart';

// Logo
import Logo from '../../assets/Logo/Vernost-Black.png';
import LogoWhite from '../../assets/Logo/Vernost-White.png';

// Icons
import Carrinho from '../../assets/Icons/Carrinho.png';
import Compras from '../../assets/Icons/Compras.png';
import User from '../../assets/Icons/User.png';

import { IoMenu } from "react-icons/io5";

export function Header() {
    // Variável para tamanho da janela
    const [screen, setScreen] = useState<boolean>(false);
    // Variável para clicar no botão menu
    const [menu, setMenu] = useState<boolean>(false);

    // Obtenha o contexto do carrinho
    const { cart } = useCart();

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
                    </nav>

                    {menu && (
                        <div className='fixed inset-0 bg-black opacity-95 flex justify-center z-50 p-4'>
                            <div className='w-full flex justify-center items-center px-4'>

                                <Link to={'/'}>
                                    <img
                                        className='w-28'
                                        src={LogoWhite}
                                        alt="Vernost Original" />
                                </Link>

                                <button
                                    onClick={() => setMenu(false)}
                                    className='text-white font-bold text-2xl absolute right-16'>
                                    X
                                </button>
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
                            <Link to={'/login'}>
                                <button className="w-24 p-2 bg-blue-500 text-white rounded-lg Ky transition-all 
                                    hover:bg-blue-600">
                                    Login
                                </button>
                            </Link>
                            <a href="/sobre" className="text-black mt-1 text-lg Ky transition-all
                            hover:font-semibold">
                                Sobre nós
                            </a>
                        </div>

                        {/* Header center */}
                        <div className='flex justify-center'>
                            <Link to={'/'}>
                                <img
                                    className='w-36'
                                    src={Logo}
                                    alt="Vernost Original" />
                            </Link>
                        </div>

                        {/* Header right */}
                        <div className='flex items-center gap-14 pe-10'>
                            <a href="#">
                                <img className='w-8' src={Compras} alt="Compras" />
                            </a>
                            <a href="/produtos/carrinho/">
                                <img className='w-6 relative' src={Carrinho} alt="Carrinho" />
                                {cart.length > 0 && (
                                    <span className='absolute top-5 right-[9.5em] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                                        {cart.length}
                                    </span>
                                )}
                            </a>
                            <a href="#">
                                <img className='w-6' src={User} alt="Usuário" />
                            </a>
                        </div>
                    </nav>
                </>
            )}
        </header>
    );
}
