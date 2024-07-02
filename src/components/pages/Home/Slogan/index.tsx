import Elengancia from '../../../../assets/Icons/Elengância.png';
import Estilo from '../../../../assets/Icons/Estilo.png';
import Prestigio from '../../../../assets/Icons/Prestígio.png';
import Arte from '../../../../assets/Icons/Arte.png';

export function Slogan() {
    return (
        <div className="w-full p-2 flex justify-center mb-12
        md:mb-16">
            <nav className='w-full grid grid-cols-1 gap-5 justify-items-center
                sm:grid-cols-2 sm:justify-items-center sm:max-w-xl
                md:grid-cols-2 md:gap-8 md:max-w-6xl
                lg:grid-cols-4
                col-auto justify-center items-center px-2'>

                <div className='flex items-center space-x-4 transition-all
                hover:scale-110'>
                    <img className="w-10 h-10" src={Elengancia} alt="Elegância é a chave para boa aparência" />
                    <div className="flex flex-col">
                        <h2 className='text-2xl Ky'>Elegância</h2>
                        <p className='Ky'>Em todos os momentos</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 transition-all
                hover:scale-110'>
                    <img className="w-10 h-10" src={Estilo} alt="Estilo em qualquer lugar" />
                    <div className="flex flex-col">
                        <h2 className='text-2xl Ky'>Estilo</h2>
                        <p className='Ky'>Em qualquer lugar</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 transition-all
                hover:scale-110'>
                    <img className="w-10 h-10" src={Prestigio} alt="Prestígio em qualquer ocasião" />
                    <div className="flex flex-col">
                        <h2 className='text-2xl Ky'>Prestígio</h2>
                        <p className='Ky'>Em qualquer ocasião</p>
                    </div>
                </div>

                <div className='flex items-center space-x-4 transition-all
                hover:scale-110'>
                    <img className="w-10 h-10" src={Arte} alt="Arte em formas de vestir" />
                    <div className="flex flex-col">
                        <h2 className='text-2xl Ky'>Arte</h2>
                        <p className='Ky'>Em formas de vestir</p>
                    </div>
                </div>
            </nav>
        </div>
    );
}
