import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';

// Definindo o tipo do produto
interface Product {
    photoProduct: string;
    nameProduct: string;
    categoryProduct: string;
    priceProduct: number;
    sizeProduct: string;
    qtdProduct: number;
}

// Definindo o tipo do contexto
interface CartContextType {
    cart: Product[];
    addCart: (product: Product) => void;
    removeCart: (product: Product) => void; // Adicione a função de remover
}

// Criando contexto com valor padrão
const CartContext = createContext<CartContextType | undefined>(undefined);

// Criando estados de redução
const cartReducer = (state: Product[], action: { type: string; payload: Product }) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            // Remove o item do carrinho
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}

// Tipando o CartProvider props
interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    // Inicializa o estado do carrinho com dados do localStorage, se disponíveis
    const initializeCart = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    };

    const [cart, dispatch] = useReducer(cartReducer, initializeCart());

    // Função para adicionar produto ao carrinho e salvar no localStorage
    const addCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    // Função para remover produto do carrinho e salvar no localStorage
    const removeCart = (product: Product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    useEffect(() => {
        // Salva o estado do carrinho no localStorage sempre que ele mudar
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addCart, removeCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar o contexto do carrinho
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
