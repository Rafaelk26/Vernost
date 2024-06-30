// Components
import { Button1 } from '../../../Buttons/Button1';
// Images
import Background from '../../../../assets/imagens/Mockup Camisa Preta.png';
// Container
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
                <div className="relative w-full h-full flex items-center justify-center z-20 -mt-2
                md:justify-start">
                    <div className="text-white text-center flex flex-col items-center 
                    md:text-start md:items-start">
                        <h1 className="text-6xl mb-1 Ky">Elegância</h1>
                        <p className="text-2xl mb-12 font-light w-48 Ky">
                            Esse é seu jeito novo de
                            <span> VER</span>
                        </p>
                        <Button1 />
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Banner;
