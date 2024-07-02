import Image1 from '../../../../assets/imagens/Clothes.png'
import Image2 from '../../../../assets/imagens/Clothes2.png'

export function Advertising() {
    return (
        <>
            <div className='w-full flex flex-col items-center mt-32 mb-12
            md:flex-row md:max-w-6xl md:mx-auto md:mt-32 md:mb-44'>

                {/* Images */}
                <div className='w-full justify-center
                md:w-1/2 flex relative'>
                    <img
                        className='w-72'
                        src={Image1}
                        alt="Roupa"
                    />
                    <img
                    className='w-60 absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-full
                    md:bottom-auto md:top-44 md:left-full md:transform-none md:-ml-44'
                        src={Image2}
                        alt="Roupa"
                    />
                </div>

                {/* Content title */}
                <div className='w-full mt-44 flex flex-col items-center
                md:w-1/2 md:ms-32 md:items-start md:mt-6'>
                    <h1 className='text-4xl w-80 Ky text-center
                    md:text-start'>Sofisticação e Design para você</h1>
                    <p className='mt-4 font-normal italic w-96 text-center
                    md:w-96 md:mb-8 md:text-start'>Sofisticação e Design são coisas magníficas.
                        Pensando em você, isso fica extremamente sério</p>
                    <a
                        className='text-lg underline Ky transition-all mt-10
                    hover:text-gray-400
                    md:mt-0'
                        href="#">Acesse e Veja</a>
                </div>
            </div>
        </>
    )
}
