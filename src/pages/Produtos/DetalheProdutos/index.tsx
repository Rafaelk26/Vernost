// Development
import { useParams } from 'react-router-dom'

// Components
import { Header } from '../../../components/Header'
import { Container } from '../../../components/Container/produtos'
import { Detail } from '../../../components/pages/Produtos/DetalheProdutos/Detail'
import { Vernost } from '../../../components/Vernost'
import { Footer } from '../../../components/Footer'

export function DetalheProdutos(){
   
    const { id } = useParams();
   
    return(
        <>
            <Header />  
            <Container>
                <Detail />
                <Vernost />
            </Container>
            <Footer />
        </>
    )
}