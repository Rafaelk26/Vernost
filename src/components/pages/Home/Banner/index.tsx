import Background from '../../../../assets/imagens/Mockup Camisa Preta.png';
import { Container } from '../../../Container';

export function Banner() {
    return (
        <main className='relative flex w-full h-screen'>

            {/* Gradiente sobre a imagem de fundo */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black z-10"></div>
            
            {/* Imagem de fundo */}
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src={Background}
                alt="Background"
            />
            
            {/* Conteúdo sobre a imagem */}
            <Container>
                <div className="relative w-full h-full flex items-center justify-start z-20">
                    <div className="text-white text-center">
                        <h1 className="text-5xl font-bold mb-4">ELEGÂNCIA</h1>
                        <p className="text-lg mb-4">Esse é seu jeito de <span>VER</span></p>
                        <button className="bg-white text-black px-6 py-3 rounded shadow-md hover:bg-gray-200 hover:font-bold transition duration-300">
                            Conferir Agora
                        </button>
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Banner;
