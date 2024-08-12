// Development
import { Link } from 'react-router-dom'

// Images
import imgUser from '../../../../../assets/Icons/Admin/User.png'
import imgStock from '../../../../../assets/Icons/Admin/Stock.png'
import imgMoney from '../../../../../assets/Icons/Admin/Money.png'
import imgClothes from '../../../../../assets/Icons/Admin/Clothes.png'
import imgBuy from '../../../../../assets/Icons/Admin/Buy.png'

export function Cards() {
    return(
        <>
            {/* Operacional */}
            <div className='w-full flex flex-col items-center
            sm:items-start
            md:items-start'>
                <h1 className="Ky text-2xl mb-1
                md:ms-5">Operacionais</h1>
                <div className="w-full grid grid-cols-1 justify-items-center gap-4
                sm:grid-cols-2
                md:grid-cols-4">
                    {/* Card 1 */}
                    <Link to={'/admin'} className='w-full max-w-64'>
                        <div className="h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">                        
                            <h1 className='Ky text-2xl'>Estoque</h1>
                            
                            <img 
                            className='w-14 h-14'
                            src={imgStock} 
                            alt="Estoque" />
                        </div>
                    </Link>

                    <Link to={'/admin'} className='w-full max-w-64'>
                        <div className="h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Usuário</h1>

                            <img
                                className='w-16 h-12'
                                src={imgUser}
                                alt="Usuário" />
                        </div>
                    </Link>

                    <Link to={'/admin'} className='w-full max-w-64'>
                        <div className="h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Roupas</h1>

                            <img
                                className='w-12 h-12'
                                src={imgClothes}
                                alt="Roupas" />
                        </div>
                    </Link>

                    <Link to={'/admin'} className='w-full max-w-64'>
                        <div className="h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Caixa</h1>

                            <img
                                className='w-14 h-14'
                                src={imgMoney}
                                alt="Caixa" />
                        </div>
                    </Link>
                </div>
            </div>

            {/* Outros */}
            <div className="w-full mt-3 grid grid-cols-1 justify-items-center gap-4
            sm:grid-cols-2
            md:grid-cols-4">
                <Link to={'/admin'} className='w-full max-w-64'>
                    {/* Cadastrar */}
                    <div>
                        <h1 className="Ky text-2xl text-blue-800">Cadastrar</h1>
                        <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-blue-900 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Roupas</h1>

                            <img
                                className='w-12 h-12'
                                src={imgClothes}
                                alt="Roupas" />
                        </div>

                    </div>
                </Link>

                <Link to={'/admin'} className='w-full max-w-64'>
                    {/* Alterar */}
                    <div>
                        <h1 className="Ky text-2xl text-yellow-600">Alterar</h1>
                        <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-yellow-600 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Compras</h1>

                            <img
                                className='w-12 h-12'
                                src={imgBuy}
                                alt="Compras" />
                        </div>
                    </div>
                </Link>   
                
                <Link to={'/admin'} className='w-full max-w-64 flex flex-col justify-end '>
                    <div>
                        <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-yellow-600 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Roupas</h1>

                            <img
                                className='w-12 h-12'
                                src={imgClothes}
                                alt="Roupas" />
                        </div>
                    </div>
                </Link>  

                <Link to={'/admin'} className='w-full max-w-64'>
                    {/* Deletar */}
                    <div>
                        <h1 className="Ky text-2xl text-red-800">Deletar</h1>
                        <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-red-800 rounded-md border-2 border-white transition-all
                        hover:scale-105 hover:cursor-pointer">

                            <h1 className='Ky text-2xl'>Roupas</h1>

                            <img
                                className='w-12 h-12'
                                src={imgClothes}
                                alt="Roupas" />
                        </div>
                    </div> 
                </Link>
                
            </div>
       </>
    )
}