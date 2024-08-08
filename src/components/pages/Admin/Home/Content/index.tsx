// Components
import { Cards } from '../Card'


export function Content() {
    return(
        <>
            <main className="w-full outline outline-2 outline-white">
                <div className="w-full flex justify-between items-center mt-6">
                    <h1 className="Ky text-3xl mt-1">Dashboard Admin</h1>
                    <p className="Ky text">Olá, Gustavo Ribeiro!</p>
                </div>

                {/* Services */}
                <section className="w-full mt-10">
                    <Cards />       
                </section>
            </main>
        
        </>
    )
}