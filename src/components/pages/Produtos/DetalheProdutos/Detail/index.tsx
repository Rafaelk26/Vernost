// Development
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Context
import { useCart } from '../../../../../contexts/Cart/';

// Interface
import { clothingProps } from '../../../../Clothes';

// Imagem 
import Clothes from '../../../../../assets/imagens/Mockup Camisa Preta.png';
import Cart from '../../../../../assets/Icons/Carrinho.png';

export function Detail() {
    const { addCart } = useCart();
    const { idParam } = useParams();

    // Armazena os dados
    const [data, setData] = useState<clothingProps | null>(null);

    // Valores na página
    const [priceDefault, setPriceDefault] = useState<number>();
    const [priceEl, setPriceEl] = useState<number>();
    const [qtd, setQtd] = useState<string>('1');
    const [sizeEl, setSizeEl] = useState<string>('P');
    const [detailEl, setDetail] = useState<string>('');
    const [colorEl, setColorEl] = useState<string>('');
    const [qtdArray, setQtdArray] = useState<string[]>([]);

    useEffect(() => {
        const connectWithDatabase = async () => {
            if (idParam !== undefined) {
                try {
                    const response = await axios.get(`http://localhost:8888/roupas/get?id=${idParam}`);
                    const clothingData = response.data.clothing;
                    setData(clothingData);

                    // Atualizando os valores
                    setPriceDefault(clothingData.price);
                    setSizeEl(clothingData?.size);
                    setDetail(clothingData.detail)
                    setColorEl(clothingData.color);
                    setQtdArray(convertForArray(clothingData.size));
                } catch (e) {
                    console.error('Não foi possível resgatar os dados:', e);
                }
            }
        };

        connectWithDatabase();
    }, [idParam]);

    useEffect(() => {
        const qtdNumber = parseFloat(qtd);

        if (!isNaN(qtdNumber) && priceDefault) {
            const result = priceDefault * qtdNumber;
            setPriceEl(result);
        }
    }, [qtd, priceDefault]);

    const handleAddToCart = () => {
        // Verifica se o usuário clicou em algum botão de tamanho
        const isSizeSelected = qtdArray.includes(sizeEl);

        if (!isSizeSelected) {
            alert("Por favor, selecione um tamanho antes de adicionar ao carrinho.");
            return;
        }

        if (data) {
            const product = {
                photoProduct: Clothes,
                nameProduct: data.name,
                categoryProduct: data.category,
                priceProduct: priceDefault ? priceDefault : 0,
                sizeProduct: sizeEl,
                qtdProduct: parseFloat(qtd) || 1,
            };
            addCart(product);
        }
    };

    function convertForArray(text: string): string[] {
        return text.split(',').map(item => item.trim());
    }

    function formatNumberToMoney(n: number | undefined): string {
        if (n === undefined || isNaN(n)) {
            return '0,00';
        }

        const repareMoney = n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const newFormate = repareMoney.slice(2, repareMoney.length);

        return newFormate;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className="w-full">
                <div className="w-full flex flex-col items-center mt-16 gap-10 md:gap-16 md:mt-16 md:flex-row">
                    <div className='md:w-1/2 flex justify-end'>
                        <img
                            className="w-96 h-80 object-cover"
                            src={data.photoClothing}
                            alt={data.name} />
                    </div>
                    <div className='w-96 flex flex-col items-center md:w-1/2 md:items-start'>
                        <div className='w-full flex flex-col items-center mt-4 md:items-start md:mt-0'>
                            <h1 className='Ky text-4xl'>{data.name}</h1>
                            <h4 className='Ky text-xl'>{data.category}</h4>
                        </div>
                        <h3 className='Ky mt-4 text-4xl text-lime-600'>R${qtd < '1' ? formatNumberToMoney(priceDefault) : formatNumberToMoney(priceEl)}</h3>
                        <div className='w-full flex flex-col gap-1 items-center mt-2 md:items-start md:mt-0'>
                            <h4>Size</h4>
                            <div className='w-full flex justify-center gap-3 mt-3 md:justify-start md:mt-0 md:gap-2'>
                                {qtdArray.map((s) => (
                                    <button
                                        key={s}
                                        className={`w-max h-7 border-2 flex justify-center items-center border-black rounded transition-colors ${sizeEl === s ? 'bg-slate-600' : 'bg-white'}`}
                                        onClick={() => setSizeEl(s)}
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

                        {/* Colors clothes */}
                        <div className='w-full flex gap-4 mt-6 justify-center md:justify-start md:gap-2'>
                            <div className={`w-6 h-6 outline outline-2 outline-white bg-${colorEl}-500 rounded-full`}></div>
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
                    <p>{detailEl}</p>
                </div>
            </section>
        </>
    );
}
