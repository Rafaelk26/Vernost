// Detail.js
import { useEffect, useState } from 'react';
import { useCart } from '../../../../../contexts/Cart/'

// Imagem 
import Clothes from '../../../../../assets/imagens/Mockup Camisa Preta.png';
import Cart from '../../../../../assets/Icons/Carrinho.png';

export function Detail() {
    const { addCart } = useCart(); 

    const [priceDefault, setPriceDefault] = useState<number>(69.99);
    const [price, setPrice] = useState<number>(69.99);
    const [qtd, setQtd] = useState<string>('');
    const [size, setSize] = useState<string>('P');

    useEffect(() => {
        setPriceDefault(priceDefault);

        const qtdNumber = parseFloat(qtd);

        if (!isNaN(qtdNumber)) {
            const result = 69.99 * qtdNumber;
            setPrice(result);
        }
    }, [qtd]);

    const handleAddToCart = () => {
        const product = {
            photoProduct: Clothes,
            nameProduct: 'Social White',
            categoryProduct: 'Social',
            priceProduct: price,
            sizeProduct: size,
            qtdProduct: parseFloat(qtd) || 1,
        };
        addCart(product);
    };

    return (
        <>
            <section className="w-full">
                <div className="w-full flex flex-col items-center mt-16 gap-10 md:gap-16 md:mt-16 md:flex-row">
                    <div className='md:w-1/2 flex justify-end'>
                        <img
                            className="w-96 h-80 object-cover"
                            src={Clothes}
                            alt="Clothes" />
                    </div>
                    <div className='w-96 flex flex-col items-center md:w-1/2 md:items-start'>
                        <div className='w-full flex flex-col items-center mt-4 md:items-start md:mt-0'>
                            <h1 className='Ky text-4xl'>Social White</h1>
                            <h4 className='Ky text-xl'>Social</h4>
                        </div>
                        <h3 className='Ky mt-4 text-4xl text-lime-600'>R$ {qtd < '1' ? priceDefault : price.toFixed(2)}</h3>
                        <div className='w-full flex flex-col gap-1 items-center mt-2 md:items-start md:mt-0'>
                            <h4>Size</h4>
                            <div className='w-full flex justify-center gap-3 mt-3 md:justify-start md:mt-0 md:gap-2'>
                                {['P', 'M', 'G', 'GG'].map((s) => (
                                    <button
                                        key={s}
                                        className={`w-max h-5 bg-white flex justify-center items-center rounded transition-colors ${size === s ? 'bg-slate-400' : ''}`}
                                        onClick={() => setSize(s)}
                                    >
                                        <p className='text-black Ky p-1 mt-1 text-2xl'>{s}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='w-full flex flex-col mt-6 items-center gap-3 md:items-start md:mt-1 md:gap-1'>
                            <h4>Qtd.</h4>
                            <input
                                onChange={(e) => setQtd(e.target.value)}
                                type="number"
                                name="numberClothes"
                                defaultValue={1}
                                min={0}
                                className='w-10 bg-black rounded outline outline-1 outline-white p-1'
                            />
                        </div>
                        <div className='w-full flex gap-4 mt-6 justify-center md:justify-start md:gap-2'>
                            <div className='w-6 h-6 outline outline-2 outline-white bg-red-600 rounded-full'></div>
                            <div className='w-6 h-6 outline outline-2 outline-white bg-green-600 rounded-full'></div>
                        </div>
                        <div className='w-full mt-6 flex justify-center md:justify-start md:mt-4'>
                            <button
                                onClick={handleAddToCart}
                                className='w-max bg-white flex items-center justify-center text-black text Ky gap-2 ps-2 pe-3 pt-3 pb-2 rounded-lg transition-colors hover:bg-gray-400'
                            >
                                <img
                                    className='w-6'
                                    src={Cart}
                                    alt="Carrinho" />
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-2xl mt-6 mb-4 mx-auto text-center md:max-w-full md:text-start md:mt-4'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores nihil repudiandae unde maxime est doloribus, saepe quam, adipisci architecto at dicta mollitia. A eum reprehenderit error consectetur iure aliquid!
                        Rem odio mollitia, necessitatibus debitis possimus, dolor dolorem magni a labore quia nam iure culpa quaerat, accusamus impedit dicta libero laborum assumenda! Perspiciatis esse ipsum natus veritatis culpa id temporibus.
                        Animi maiores, cumque in alias cupiditate incidunt eaque ipsum expedita. Neque veniam aut, iusto quas quia molestias nulla commodi at rerum laboriosam cupiditate modi quisquam voluptate voluptatem quae amet incidunt.
                        Numquam accusamus fugiat praesentium unde cum? Harum non repudiandae officia soluta mollitia ratione doloremque officiis suscipit dignissimos rerum perspiciatis pariatur molestiae quam, corrupti provident beatae dolores quidem nostrum impedit aut.
                        Quos nostrum odio expedita velit accusantium dicta accusamus, architecto aut, cumque sit voluptatibus sequi blanditiis. Provident sit, at magni fugit doloremque dolorem placeat sed earum exercitationem quaerat! Quidem, omnis odit?</p>
                </div>
            </section>
        </>
    );
}
