// Development
import { FormEvent, useEffect, useState } from 'react'

// Icon
import { MdDelete } from "react-icons/md"

// Context
import { useCart } from '../../../../contexts/Cart'
import { useUser } from '../../../../contexts/User'

// Icons
import { IoIosLogOut } from "react-icons/io"
import { FaWpforms } from "react-icons/fa"

// Image Not Found User
import noLogged from '../../../../assets/imagens/NoLogged.png'

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

    // Itens do User
    const { user } = useUser();

    // Itens do carrinho
    const { cart, removeCart } = useCart();

    // Variáveis globais do carrinho
    const [ cartArray, setCartArray ] = useState<Product[]>(cart);
    const [ priceActually, setPriceActually ] = useState<string>('')

    // Variável de aitividade de usuário
    const [ userLogged, setUserLogged ] = useState<boolean>()

    // Preço do total das compras do carrinho
    let total = 0;

    // Número de telefone do vendedor
    const [WhatsApp, setWhatsApp] = useState<string>('');

    // Ao acessar a página insere o número do WhatsApp para contato do vendedor
    useEffect(()=> {
        setWhatsApp('5512981960559');
    }, [])

    // Resgata os itens do context cart para a página de carrinho
    useEffect(() => {
        setCartArray(cart);
    }, [cart]);

    // Atualiza preço do sub-total
    useEffect(() => {
        let total = 0;
        cartArray.forEach(p => {
            total += p.priceProduct * p.qtdProduct;
        });

        let price = formatNumberToMoney(total)

        setPriceActually(price);
    }, [cartArray]);

    // Para enviar a tabela de minhas compras
    const handleSubmitObject = (e: FormEvent) => {
        e.preventDefault()
        // Checa se existe user
        if(user){
            // Se existir usuário na sessão logado
            const data = cartArray;
            const totalPrice = data.reduce((acc, p) => acc + p.priceProduct * p.qtdProduct, 0);

            const message = `Olá, gostaria de comprar os seguintes produtos:\n\n${data.map(p => (
                `*Camisa*: ${p.nameProduct}\n*Quantidade*: ${p.qtdProduct}\n*Tamanho*: ${p.sizeProduct}\n*Preço*: R$ ${p.priceProduct.toFixed(2)}\n-------------------------------------`
            )).join('\n')}\n\n*Preço Total*: R$ ${formatNumberToMoney(totalPrice)}\nVernost Original`;

            const url = `https://wa.me/${WhatsApp}?text=${encodeURIComponent(message)}`;

            window.location.href = url;
            return
        }
        // Para usuário não logado
        setUserLogged(true);
    }

    // Converter valor em moeda brasileira (local)
    function formatNumberToMoney(n: number): string {

        const repareMoney = n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const newFormate = repareMoney.slice(2, repareMoney.length)

        return newFormate
    }

    return(
        <>
            <section className='w-full h-screen mb-28
            md:mb-0'>
                <form onSubmit={(e) => handleSubmitObject(e)}>
                    <div className='w-full mt-16'>
                        <h1 className='Ky text-4xl'>Carrinho</h1>
                    </div>

                    <div className='w-full mt-10 flex flex-col justify-between gap-6
                    sm:flex-col sm:gap-6
                    md:flex-row md:mb-0 md:gap-2'>
                        {cartArray.length > 0 ? (
                            <table className='w-full h-96 md:max-w-2xl outline outline-2 outline-white rounded-xl'>
                                <div className='w-full my-4 ms-4 p-4'>
                                    <h1 className='Ky text-3xl'>Produtos</h1>
                                </div>
                                <tbody className='w-full me-2 flex flex-col gap-4 pb-8 h-96 mb-6 overflow-auto'>
                                    {cartArray.map(p => (
                                        <tr 
                                        key={'asdsad'}
                                        className='w-full flex flex-row justify-around gap-2 items-center'>
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
                                                <p className='Ky'>R$ <span className='price-product'>{formatNumberToMoney(p.priceProduct)}</span></p>
                                            </td>
                                            {/* Size */}
                                            <td>
                                                <p className='Ky'>{p.sizeProduct}</p>
                                            </td>
                                            {/* Delete */}
                                            <td>
                                                <button
                                                    onClick={() => removeCart(p)}
                                                    className='w-max'
                                                    type='button'>
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
                                        <span className='Ky mt-4 text-4xl text-green-600'>{priceActually}</span>
                                    </div>
                                </div>
                                <button
                                    className='w-full mt-4 p-3 bg-white text-black Ky text-xl rounded-lg transition-all
                                    hover:bg-black hover:text-white hover:outline hover:outline-2 hover:outline-white'
                                    type='submit'>
                                    Finalizar Compra
                                </button>
                            </div>
                        ) : <>
                            <div className='w-full md:max-w-80 md:max-h-44'>
                                <div className='w-full pb-6 outline outline-2 outline-white rounded-xl'>
                                    <h4 className='Ky ps-6 pe-6 pt-6 text-xl'>Sub-total</h4>
                                    <div className='w-full flex justify-between items-center px-6'>
                                        <h1 className='Ky mt-6 text-2xl text-gray-500'>R$</h1>
                                        <span className='Ky mt-4 text-4xl text-gray-500'>{formatNumberToMoney(0.00)}</span>
                                    </div>
                                </div>
                                <button
                                    className='w-full mt-4 p-3 bg-gray-500 text-black Ky text-xl rounded-lg cursor-default'
                                    type='button'>
                                    Finalizar Compra
                                </button>
                            </div>
                        </>}
                    </div>
                </form>

                {userLogged ? (
                    <>
                        <div className='w-72 h-max bg-white absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg'>
                            {/* Image */}
                            <div className='w-full h-48'>
                                <img
                                    className='w-full h-full object-cover rounded-tl-lg rounded-tr-lg'
                                    src={noLogged}
                                    alt="Not Found User" />
                            </div>

                            <h1 className='Ky text-black text-center text-2xl mt-2'>Acessar</h1>

                            {/* Buttons */}
                            <div className='flex flex-col items-center pb-8 mt-2'>
                                <a href={'/login'}>
                                    <button className='w-44 bg-red-600 text-white
                                    text-xl flex items-center justify-center Ky mt-1 py-1 px-4
                                    gap-4 rounded-[4px]'>
                                        <IoIosLogOut
                                            size={24}
                                            fill='#fff'
                                        />
                                        Login
                                    </button>
                                </a>

                                {/* Botão Cadastro */}
                                <a href={'/cadastro'}>
                                    <button className='w-44 bg-blue-950 text-white
                                    text-xl flex items-center justify-center Ky mt-1 py-1 px-4
                                    gap-4 rounded-[4px]'>
                                        <FaWpforms
                                            size={20}
                                            fill='#fff'
                                        />
                                        Cadastro
                                    </button>
                                </a>
                            </div>
                        </div>
                    
                    </>
                ) : (
                    <></>
                )}
            </section>
        </>
    )
}

