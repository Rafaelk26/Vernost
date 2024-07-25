// Development
import { useEffect, useState } from 'react'

// Icon
import { MdDelete } from "react-icons/md"

// Context
import { useCart } from '../../../../contexts/Cart'

// Definindo a interface para um produto do carrinho adicionado
interface Product {
    photoProduct: string;
    nameProduct: string;
    categoryProduct: string;
    priceProduct: number;
    sizeProduct: string;
    qtdProduct: number;
}

export function CartProduct() {

    const { cart, removeCart } = useCart();

    const [cartArray, setCartArray] = useState<Product[]>(cart);

    useEffect(() => {
        setCartArray(cart);
    }, [cart]);

    return(
        <>
            <section className='w-full h-screen'>
                <div className='w-full mt-16'>
                    <h1 className='Ky text-4xl'>Carrinho</h1>
                </div>

                <div className='w-full mt-10 flex justify-between'>
                    {cartArray.length > 0 ? (
                        <table className='w-full h-96 md:max-w-2xl outline outline-2 outline-white rounded-xl'>
                            <div className='w-full my-4 ms-4 p-4'>
                                <h1 className='Ky text-3xl'>Produtos</h1>
                            </div>
                            <tbody className='w-full me-2 flex flex-col gap-4 pb-8'>
                                {cartArray.map(p => (
                                    <tr className='w-full flex flex-row justify-around gap-2 items-center'>
                                        {/* Photo Product */}
                                        <td>
                                            <img
                                                className='w-12 h-12 object-cover rounded-xl'
                                                src={p.photoProduct}
                                                alt="Product" />
                                        </td>
                                        {/* Name and Category */}
                                        <td>
                                            <h1 className='Ky text-xl'>{p.nameProduct}</h1>
                                            <h4 className='Ky'>{p.categoryProduct}</h4>
                                        </td>
                                        {/* Qtd */}
                                        <td>
                                            <p className='Ky'>{p.qtdProduct}</p>
                                        </td>
                                        {/* Price */}
                                        <td>
                                            <p className='Ky'>R$ {p.priceProduct.toFixed(2)}</p>
                                        </td>
                                        {/* Size */}
                                        <td>
                                            <p className='Ky'>{p.sizeProduct}</p>
                                        </td>
                                        {/* Delete */}
                                        <td>
                                            <button
                                                onClick={() => removeCart(p)}
                                                className='w-max'>
                                                <MdDelete
                                                    fill='#FF1C1C'
                                                    size={24}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> 
                    ) : 
                    <>
                        <table className='w-full h-96 md:max-w-2xl outline outline-2 outline-white rounded-xl'>
                            <div className='w-full my-4 ms-4 p-4'>
                                <h1 className='Ky text-3xl'>Produtos</h1>
                            </div>
                            <tbody className='w-full h-max me-2 flex flex-col gap-4 pb-8 justify-center'>
                                <div className='w-full flex flex-col items-center mt-20'>
                                    <h1 className='Ky text-xl'>Não há produtos no carrinho</h1>
                                </div>
                            </tbody>
                        </table> 
                    </>
                    }
                     
                    
                          

                    

                    {/* Sub-total */}


                    {cartArray.length > 0 ? (
                        <div className='w-full md:max-w-80 md:max-h-44'>
                            <div className='w-full pb-6 outline outline-2 outline-white rounded-xl'>
                                <h4 className='Ky ps-6 pe-6 pt-6 text-xl'>Sub-total</h4>
                                <div className='w-full flex justify-between items-center px-6'>
                                    <h1 className='Ky mt-6 text-2xl text-green-600'>R$</h1>
                                    <span className='Ky mt-4 text-4xl text-green-600'>69,99</span>
                                </div>
                            </div>
                            <button
                                className='w-full mt-4 p-3 bg-white text-black Ky text-xl rounded-lg transition-all
                                hover:bg-black hover:text-white hover:outline hover:outline-2 hover:outline-white'
                                type='button'>
                                Finalizar Compra
                            </button>
                        </div>
                    ) : <>
                            <div className='w-full md:max-w-80 md:max-h-44'>
                                <div className='w-full pb-6 outline outline-2 outline-white rounded-xl'>
                                    <h4 className='Ky ps-6 pe-6 pt-6 text-xl'>Sub-total</h4>
                                    <div className='w-full flex justify-between items-center px-6'>
                                        <h1 className='Ky mt-6 text-2xl text-gray-500'>R$</h1>
                                        <span className='Ky mt-4 text-4xl text-gray-500'>0,00</span>
                                    </div>
                                </div>
                                <button
                                    className='w-full mt-4 p-3 bg-gray-500 text-black Ky text-xl rounded-lg'
                                    type='button'>
                                    Finalizar Compra
                                </button>
                            </div>
                        </>}
                </div>
            </section>
        </>
    )
}

