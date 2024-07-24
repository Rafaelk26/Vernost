// Development
import { Link } from 'react-router-dom'

export function NavBar() {
    return (
        <div className='bg-zinc-900'>
            <div className="w-full overflow-x-auto py-1 px-3 flex justify-start items-center gap-14 
            sm:gap-16 sm:justify-center
            md:gap-16
            lg:gap-28">
                <div className="flex flex-col justify-center items-center flex-shrink-0 mt-2">
                    <Link to={'/produtos/show/Todos'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/100/100'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Todos</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Link to={'/produtos/show/Casual'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/200'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Casual</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Link to={'/produtos/show/Social'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/100/100'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Social</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Link to={'/produtos/show/Vintage'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/100/100'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Vintage</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Link to={'/produtos/show/Gala'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/100/100'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Gala</span>
                </div>
                <div className="flex flex-col justify-center items-center flex-shrink-0">
                    <Link to={'/produtos/show/Lounge'}>
                        <div className="h-16 w-16 rounded-full overflow-hidden transition-all
                        lg:w-h-16 lg:h-16
                        hover:outline hover:outline-white hover:cursor-pointer">
                            <img 
                            src={'https://picsum.photos/100/100'} 
                            alt="foto.ex"
                            className="h-full w-full object-cover"
                            />
                        </div>
                    </Link>
                    <span className="text-white Ky font-medium mt-1">Lounge</span>
                </div>
            </div>
        </div>
    );
}
