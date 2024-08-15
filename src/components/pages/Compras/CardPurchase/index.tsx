// Icon
import { FaRegCalendarCheck } from "react-icons/fa"

// Image
import imgPurchase from '../../../../assets/imagens/PurchaseImg.png';

export interface cardProps {
    id: string;
    nameUser: string | undefined;
    statusPurchase?: boolean;
    date?: string;
    clothing?: Clothing[] | undefined; 
}

export interface Clothing{
    photoClothing: string;
    name: string;
    category: string;
    size: string;
    price: number;
    quantity: number;
}

export function Card({ id, nameUser, statusPurchase, date, onClick }: cardProps & { onClick: () => void }) {
    return (
        <>
            <div className="w-64 h-[350px] bg-white relative">
                <div className="w-full h-60 rounded-bl-3xl">
                    <img
                        className="w-full h-full object-cover rounded-bl-3xl"
                        src={imgPurchase}
                        alt={`Compra #${id}`} />
                </div>

                <div className='w-full flex items-center justify-between mt-3 px-3'>
                    <div className='flex items-center gap-1'>
                        <span className='Ky text-black mt-1 text-sm'>
                            {nameUser}
                        </span>
                    </div>
                    <div className={`w-[68px] h-6 rounded-md shadow-black shadow-inner flex justify-center items-center ${statusPurchase ? 'bg-green-500' : 'bg-yellow-500'}`}>
                        <p className='Ky text-xs mt-1'>
                            {statusPurchase ? 'Concluído' : 'Pendente'}
                        </p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between mt-5 px-3'>
                    <div className='flex gap-2 items-center'>
                        <FaRegCalendarCheck fill="#000" size={22} />
                        <span className="Ky text-sm text-black mt-1">{date}</span>
                    </div>
                    <button
                        onClick={onClick}
                        className="w-[76px] h-7 bg-black rounded-md flex justify-center items-center">
                        <span className="Ky text-xs mt-1 text-white">Detalhes</span>
                    </button>
                </div>
            </div>
        </>
    )
}