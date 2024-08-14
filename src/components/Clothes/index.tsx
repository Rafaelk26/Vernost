// Development
import { Link } from 'react-router-dom';

// Icons
import { FaArrowRight } from 'react-icons/fa';

// ImageEx
import Camisa from '../../assets/imagens/Mockup Camisa Preta.png';

export interface clothingProps {
    id: string;
    name: string;
    photoClothing: string;
    category: string;
    price: number;
    color: string;
}

export function ClothingItem({id, name, photoClothing, price, category, color}: clothingProps) {

    function addNumberFormatedMoney(n: number): string{
        const numberFormated = n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        const newFormated = numberFormated.slice(2, numberFormated.length)
        return newFormated;
    }
    
    return (
        <div key={id} id={id} className="w-72 flex flex-col bg-white h-max transition-all hover:scale-105">
            <Link to={`/roupas/get/${id}`}>
                <div className="w-full h-72 bg-gray-200 overflow-hidden mb-2">
                    <img
                        src={photoClothing}
                        alt='Imagem'
                        className="w-full h-full object-cover rounded-bl-3xl"
                    />
                </div>
            </Link>
            <div className='flex ps-2 pe-3 mb-4'>
                <div className="w-full">
                    <h2 className="text-lg font-bold Ky text-black">{name}</h2>
                    <p className="text-sm text-black Ky">{category}</p>
                    <h2 className='mt-2 text-xl font-bold Ky text-black'>R$
                        <span className='ms-1 text-2xl font-bold text-green-700'>{addNumberFormatedMoney(price)}</span>
                    </h2>
                    <div className="mt-2">
                        <div className="flex space-x-2 mt-1">
                            <div className={`w-6 h-6 bg-[${color}] rounded-full focus:outline-none`}></div>
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
