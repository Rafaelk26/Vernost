import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { useCart } from '../../contexts/Cart';

// Definindo a interface para um produto do carrinho adicionado
interface Product {
    photoProduct: string;
    nameProduct: string;
    categoryProduct: string;
    priceProduct: number;
    sizeProduct: string;
    qtdProduct: number;
}

export function Carrinho() {
    const { cart, removeCart } = useCart();

    const [cartArray, setCartArray] = useState<Product[]>(cart);

    useEffect(() => {
        setCartArray(cart);
    }, [cart]);

    return (
        <>
            <Header />
            <div className="w-full p-4">
                <h1 className="text-2xl font-bold mb-4">Carrinho</h1>
                {cartArray.length === 0 ? (
                    <p className="text-lg">Seu carrinho está vazio.</p>
                ) : (
                    <div className="w-full flex flex-col gap-4">
                        {cartArray.map((product, index) => (
                            <div key={index} className="flex justify-between items-center p-4 border-b">
                                <div className="flex items-center">
                                    <img
                                        src={product.photoProduct}
                                        alt={product.nameProduct}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-bold">{product.nameProduct}</h2>
                                        <p>{product.categoryProduct}</p>
                                        <p>R$ {product.priceProduct.toFixed(2)}</p>
                                        <p>Tamanho: {product.sizeProduct}</p>
                                        <p>Quantidade: {product.qtdProduct}</p>
                                    </div>
                                </div>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                    // Adicione a lógica de remoção se necessário
                                    onClick={() => {
                                        // Remover produto do carrinho (exemplo, deve ser adaptado conforme a lógica do seu reducer)
                                        removeCart(product)
                                    }}
                                >
                                    Remover
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
