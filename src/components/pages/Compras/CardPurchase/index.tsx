// Development

// Icon
import { FaRegCalendarCheck } from "react-icons/fa"

// Image ex
import imgUser from '../../../../assets/imagens/Mockup Camisa Preta.png';
import imgPurchase from '../../../../assets/imagens/PurchaseImg.png';

interface cardProps {
    userPhoto: string;
    userName: string;
    status: boolean;
    details?: purchase[]; 
}

interface purchase{
    photoProduct: string;
    nameProduct: string;
    categoryProduct: string;
    sizeProduct: string;
    priceProduct: number;
    qtdProduct: string;
}

export function Card() {

    return(
        <>
            <div className="w-64 h-[350px] bg-white">
                {/* Image Sacola */}
                <div className="w-full h-60 rounded-bl-3xl">
                    <img 
                    className="w-full h-full object-cover rounded-bl-3xl"
                    src={imgPurchase} 
                    alt={`Compra #fsasagasd`} />
                </div>

                {/* Details Purchase */}
                <div className='w-full flex items-center justify-between mt-3 px-3'>
                    {/* Photo and Name of User */}
                    <div className='flex items-center gap-1'>
                        <img 
                        className='w-8 h-8 object-cover rounded-full'
                        src={imgUser} 
                        alt={`User${'dasdsadas'}`} />

                        {/* Name User */}
                        <span className='Ky text-black mt-1 text-sm'>
                            João da Silva
                        </span>
                    </div>

                    {/* Status */}
                    <div className='w-[68px] h-6 bg-yellow-500 rounded-md shadow-black shadow-inner flex justify-center items-center'>
                        <p className='Ky text-black text-xs mt-1'>Pendente</p>
                    </div>
                </div>

                <div className='w-full flex items-center justify-between mt-5 px-3'>
                    {/* Date */}
                    <div className='flex gap-2 items-center'>
                        <FaRegCalendarCheck
                        fill="#000"
                        size={22}
                        />

                        <span className="Ky text-sm text-black mt-1">01/08/2024</span>
                    </div>

                    {/* Button Details */}
                    <button 
                    onClick={()=> alert('Clicou!')}
                    className="w-[76px] h-7 bg-black rounded-md flex justify-center items-center">
                        <span className="Ky text-xs mt-1">Detalhes</span>
                    </button>
                </div>
            </div>
        </>
    )
}