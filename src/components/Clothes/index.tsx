// Development
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Camisa from '../../assets/imagens/Mockup Camisa Preta.png';

interface clothingProps {
    id: string;
    name: string;
    photoClothes: string;
    categories: string;
    price: string;
    colors: string[];
}

export function ClothingItem() {
    return (
        <div key={'0'} id='0' className="w-72 flex flex-col bg-white h-max transition-all hover:scale-105">
            <Link to={`/produtos/detalhes/${0}`}>
                <div className="w-full h-72 bg-gray-200 overflow-hidden mb-2">
                    <img
                        src={Camisa}
                        alt='Imagem'
                        className="w-full h-full object-cover rounded-bl-3xl"
                    />
                </div>
            </Link>
            <div className='flex ps-2 pe-3 mb-4'>
                <div className="w-full">
                    <h2 className="text-lg font-bold Ky text-black">Camisa Preta</h2>
                    <p className="text-sm text-black Ky">Social</p>
                    <h2 className='mt-2 text-xl font-bold Ky text-black'>R$
                        <span className='ms-1 text-2xl font-bold text-green-700'>120,00</span>
                    </h2>
                    <div className="mt-2">
                        <div className="flex space-x-2 mt-1">
                            <div className="w-6 h-6 bg-red-500 rounded-full focus:outline-none"></div>
                            <div className="w-6 h-6 bg-green-500 rounded-full focus:outline-none"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full focus:outline-none"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center -rotate-45">
                    <Link to={`/produtos/detalhes/${0}`}>
                        <div className='rounded-full border-2 border-black p-1'>
                            <FaArrowRight size={22} fill='#000' className="m-0" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
