// Development
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useUser } from '../../contexts/User'

// Components
import { Header } from '../../components/Header'
import { ProfileId } from '../../components/pages/Perfil/ProfileId'
import { Footer } from '../../components/Footer'

// Image
import notLogged from '../../assets/imagens/NoLogged.png'

// Icons
import { IoIosLogOut } from "react-icons/io"
import { FaWpforms } from "react-icons/fa"

export function Perfil() {
    const { user } = useUser();
    const [userId, setUserId] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userNick, setUserNick] = useState<string | null>(null);
    const [userPhoto, setUserPhoto] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            setUserId(user.id || null);
            setUserName(user.fullName || null);
            setUserEmail(user.email || null);
            setUserNick(user.username || null);
            setUserPhoto(user.photoUser || null);
        }
    }, [user]);

    if (!userId) {
        return (
            <>
                <Header />
                <div className='flex items-center justify-center h-screen w-full flex-col -mt-10'>
                    <h1 className='Ky text-2xl mb-4'>Ops... Parece que você não tem perfil</h1>
                    <div className='ww-full h-64 max-w-lg flex bg-white rounded-tl-3xl rounded-br-3xl
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
            <ProfileId
            id={userId ? userId : ''}
            fullName={userName ? userName : ''}
            email={userEmail ? userEmail : ''}
            userNick={userNick ? userNick : ''}
            photoUser={userPhoto ? userPhoto : ''}
            />
            <Footer />
        </>
    );
}
