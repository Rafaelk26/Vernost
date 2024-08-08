// Images
import imgUser from '../../../../../assets/Icons/User.png'

export function Cards() {
    return(
        <>
            {/* Operacional */}
            <div className='w-full flex flex-col items-center
            md:items-start'>
                <h1 className="Ky text-2xl mb-1">Operacionais</h1>
                <div className="w-full grid grid-cols-1 justify-items-center gap-4
                sm:grid-cols-2
                md:grid-cols-4">
                    {/* Card 1 */}
                    <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white">
                        
                        <h1 className='Ky text-xl'>Estoque</h1>
                        
                        <img 
                        className='w-14 h-14 opacity-45'
                        src={imgUser} 
                        alt="" />
                    </div>

                    <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white">

                        <h1 className='Ky text-xl'>Estoque</h1>

                        <img
                            className='w-14 h-14 opacity-45'
                            src={imgUser}
                            alt="" />
                    </div>

                    <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white">

                        <h1 className='Ky text-xl'>Estoque</h1>

                        <img
                            className='w-14 h-14 opacity-45'
                            src={imgUser}
                            alt="" />
                    </div>

                    <div className="w-full max-w-64 h-28 ps-2 pe-4 pb-[6px] flex justify-between items-end bg-zinc-700 rounded-md border-2 border-white">

                        <h1 className='Ky text-xl'>Estoque</h1>

                        <img
                            className='w-14 h-14 opacity-45'
                            src={imgUser}
                            alt="" />
                    </div>
                </div>
            </div>

            {/* Outros */}
        
        </>
    )
}