import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Context
import { useUser } from '../../contexts/User';

// Components
import { Header } from '../../components/Header';
import { Container } from '../../components/Container';
import { Footer } from '../../components/Footer';

// Images
import notLogged from '../../assets/imagens/NoLogged.png'
import imgPurchase from '../../assets/imagens/PurchaseImg.png'

// Icons
import { IoIosLogOut } from "react-icons/io"
import { FaWpforms, FaRegCalendarCheck } from "react-icons/fa"

interface ClothingDetails {
    id: string
    photoClothing?: string;
    name: string;
    category: string;
    size: string;
    price: number;
    quantity: number;
}

interface PurchaseProps {
    id: string;
    nameUser: string | undefined;
    statusPurchase?: boolean;
    date?: string;
    clothing?: ClothingDetails | undefined;
    showDetails?: boolean;
}

export function Compras() {
    const { user } = useUser();
    const [userId, setUserId] = useState<string | null>(null);
    const [userPurchase, setUserPurchase] = useState<PurchaseProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setUserId(user.id || null);
        }
    }, [user]);

    useEffect(() => {
        const rescueBuyUser = async () => {
            if (userId) {
                try {
                    const response = await axios.get(`http://localhost:8888/compras/user/${userId}`);
                    setUserPurchase(response.data);
                } catch (e) {
                    console.error('Não foi possível resgatar as compras do usuário!', e);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        rescueBuyUser();
    }, [userId]);

    const handleSelectPurchase = (index: number) => {
        const updatedPurchases = userPurchase.map((purchase, i) => {
            if (i === index) {
                return { ...purchase, showDetails: !purchase.showDetails };
            }
            return { ...purchase, showDetails: false }; // Fecha os outros cards ao abrir um novo
        });
        setUserPurchase(updatedPurchases);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="Ky text-center text-2xl">Carregando...</p>
            </div>
        );
    }

    if (!userId) {
        return (
            <>
                <Header />
                <div className='flex items-center justify-center h-screen w-full flex-col -mt-10'>
                    <h1 className='Ky text-2xl mb-4'>Faça login para ver suas compras!</h1>
                    <div className='w-full h-64 max-w-lg flex bg-white rounded-tl-3xl rounded-br-3xl md:gap-8'>
                        <div className='w-60 h-full rounded-tl-3xl'>
                            <img
                                className='w-full h-full object-cover rounded-tl-3xl'
                                src={notLogged}
                                alt="Ops.. Não há login..." />
                        </div>
                        <div className='w-full max-w-52 py-4 flex flex-col'>
                            <h1 className='Ky text-2xl text-black'>Acessar</h1>
                            <div className='w-full mt-6 flex flex-col justify-center items-center gap-6'>
                                <a href={'/login'}>
                                    <button className='w-44 bg-red-600 text-white text-xl flex items-center justify-center Ky mt-1 py-1 px-4 gap-4 rounded-[4px]'>
                                        <IoIosLogOut size={24} fill='#fff' />
                                        Login
                                    </button>
                                </a>
                                <a href={'/cadastro'}>
                                    <button className='w-44 bg-blue-950 text-white text-xl flex items-center justify-center Ky mt-1 py-1 px-4 gap-4 rounded-[4px]'>
                                        <FaWpforms size={20} fill='#fff' />
                                        Cadastro
                                    </button>
                                </a>
                            </div>
                            <footer className='relative -bottom-10 mx-auto'>
                                <Link className='Ky text-sm text-black' to={'/'}>Voltar ao início</Link>
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
            <Container>
                {userPurchase.length > 0 ? (
                    <div className='w-full mx-auto mt-16 px-8 grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                        {userPurchase.map((purchase, index) => (
                            <div className="w-64 h-[350px] bg-white relative" key={purchase.id}>
                                <div className="w-full h-60 rounded-bl-3xl">
                                    <img
                                        className="w-full h-full object-cover rounded-bl-3xl"
                                        src={imgPurchase}
                                        alt={`Compra #${purchase.id}`} />
                                </div>
                                <div className='w-full flex items-center justify-between mt-3 px-3'>
                                    <div className='flex items-center gap-1'>
                                        <span className='Ky text-black mt-1 text-sm'>
                                            {purchase.nameUser}
                                        </span>
                                    </div>
                                    <div className={`w-[68px] h-6 rounded-md shadow-black shadow-inner flex justify-center items-center ${purchase.statusPurchase ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                        <p className='Ky text-xs mt-1'>
                                            {purchase.statusPurchase ? 'Concluído' : 'Pendente'}
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-between mt-5 px-3'>
                                    <div className='flex gap-2 items-center'>
                                        <FaRegCalendarCheck fill="#000" size={22} />
                                        <span className="Ky text-sm text-black mt-1">{purchase.date}</span>
                                    </div>
                                    <button
                                        onClick={() => handleSelectPurchase(index)}
                                        className="w-[76px] h-7 bg-black rounded-md flex justify-center items-center">
                                        <span className="Ky text-xs mt-1 text-white">Detalhes</span>
                                    </button>
                                </div>

                                {purchase.showDetails && purchase.clothing && (
                                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 z-10 p-4">
                                        <div key={purchase.clothing.id} className="mb-4">
                                            <p className="text-sm text-black Ky"><strong className='text-black Ky'>Nome:</strong> {purchase.clothing.name}</p>
                                            <p className="text-sm text-black Ky"><strong className='text-black Ky'>Tamanho:</strong> {purchase.clothing.size}</p>
                                            <p className="text-sm text-black Ky"><strong className='text-black Ky'>Preço:</strong> R${purchase.clothing.price.toFixed(2)}</p>
                                            <p className="text-sm text-black Ky"><strong className='text-black Ky'>Quantidade:</strong> {purchase.clothing.quantity}</p>
                                        </div>
                                        <button
                                            onClick={() => handleSelectPurchase(index)}
                                            className="w-full mt-4 bg-red-600 text-white py-2 rounded-md">
                                            Fechar
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-96">
                        <p className="Ky text-center text-2xl">
                            Este usuário não possui nenhuma compra até o momento.
                        </p>
                    </div>
                )}
            </Container>
            <Footer />
        </>
    );
}
