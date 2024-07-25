// Components
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { CartProduct } from '../../components/pages/Carrinho/CartProduct'

export function Carrinho() {
    return (
        <>
            <Header />
            <Container>
                <CartProduct />
            </Container>
            <Footer />
        </>
    );
}
