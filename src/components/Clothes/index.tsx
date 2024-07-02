import { FaArrowRight } from 'react-icons/fa';
import Camisa from '../../assets/imagens/Mockup Camisa Preta.png'

export function ClothingItem() {
    return (
        <div className="w-2/3 flex flex-col bg-white
        md:w-72 h-96">
            <div className="w-full h-72 bg-gray-200 overflow-hidden mb-2">
                <img
                src={Camisa}
                alt='Imagem'
                className="w-full h-full object-cover rounded-bl-3xl" />
            </div>
            <div className='flex ps-2 pe-3 mb-8'>
                <div className="w-full">
                    <h2 className="text-lg font-bold Ky text-black">Camisa Preta</h2>
                    <p className="text-sm text-black Ky">Social</p>
                    <div className="mt-2">
                        <div className="flex space-x-2 mt-1">
                            <div className="w-6 h-6 bg-red-500 rounded-full focus:outline-none"></div>
                            <div className="w-6 h-6 bg-green-500 rounded-full focus:outline-none"></div>
                            <div className="w-6 h-6 bg-blue-500 rounded-full focus:outline-none"></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center -rotate-45">
                    <div className='rounded-full border-2 border-black p-1'>
                        <FaArrowRight size={22} fill='#000' className="m-0" />
                    </div>
                </div>
            </div>
        </div>
    );
}
