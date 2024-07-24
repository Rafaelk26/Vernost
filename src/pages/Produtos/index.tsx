// Development
// Produtos.js
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// Components
import { Header } from '../../components/Header'
import { NavBar } from '../../components/NavBar'
import { Container } from '../../components/Container/produtos'
import { Title } from '../../components/pages/Produtos/Title'
import { ClothingItem } from '../../components/Clothes'
import { Vernost } from '../../components/Vernost'
import { Footer } from '../../components/Footer'

export function Produtos() {
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <>
            <Header />
            <NavBar />
            <Container>
                <Title
                title={`${id}`}
                search={searchTerm}
                setSearch={setSearchTerm}
                />
                <div className='w-full grid grid-cols-1 justify-items-center gap-5 mt-10 mb-10 sm:grid-cols-2 md:grid-cols-3'>
                    {/* Aqui você pode adicionar a lógica para filtrar as roupas com base no searchTerm */}
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                    <ClothingItem />
                </div>
                <Vernost />
            </Container>
            <Footer />
        </>
    )
}
