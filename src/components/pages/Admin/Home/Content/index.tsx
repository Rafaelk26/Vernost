// Components
import { Cards } from '../Card'
import { Tables } from '../Tables'

// Context
import { useUser } from '../../../../../contexts/User'

export function Content() {

    const { user } = useUser()

    return(
        <>
            <main className="w-full">
                <div className="w-full flex flex-col items-center mt-6 gap-1
                sm:justify-between sm:flex-row
                md:justify-between md:flex-row">
                    <h1 className="Ky text-3xl mt-1">Dashboard Admin</h1>
                    <p className="Ky text">Olá, {user?.username}!</p>
                </div>

                {/* Services */}
                <section className="w-full mt-10">
                    <Cards />       
                </section>
                {/* Tables */}
                <section className="w-full h-96 mt-14 mb-20">
                    <Tables />
                </section>
            </main>
        
        </>
    )
}