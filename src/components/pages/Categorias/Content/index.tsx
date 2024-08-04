// Component
import { Card } from '../CardCategories'

// Image
import imgExample from '../../../../assets/imagens/Mockup Camisa Preta.png'
import { Title } from '../../Produtos/Title'

export function Content() {
    return(
        <>
        
            <section className="w-full mt-16 mb-16">
                <h1 className="Ky text-3xl text-center 
                sm:text-start
                md:text-start">Categorias</h1>

                <h3 className="Ky text-xl text-center mt-8">Escolha a sua categoria favorita!</h3>
                <div className="w-full grid grid-cols-1 justify-items-center gap-8 mt-8
                sm:grid-cols-2
                md:grid-cols-3">
                    <Card title='Todos' image={imgExample} />

                    <Card title='Casual' image={imgExample} />

                    <Card title='Social' image={imgExample} />

                    <Card title='Vintage' image={imgExample} />

                    <Card title='Gala' image={imgExample} />

                    <Card title='Lounge' image={imgExample} />
                </div>
            </section>
        
        </>
    )
}