// Development
import { Link } from 'react-router-dom'

interface cardProps{
    image: string;
    title: string;
}

export function Card({ image, title }: cardProps) {
    return(
        <>
            <Link to={`/produtos/show/${title}`}>
                <div className="relative w-64 h-80 bg-black transition-all 
                hover:scale-105">
                    <img
                    className="w-full h-full object-cover opacity-65"
                    src={image}
                    alt="Categorias" />

                    <h4 className='Ky text-2xl text-start absolute z-10 bottom-2 left-4'>{title}</h4>
                </div>
            </Link>
        </>
    )
}