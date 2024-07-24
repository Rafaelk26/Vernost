import { Header } from "../../components/Header"
import { NavBar } from "../../components/NavBar"
import { Banner } from "../../components/pages/Home/Banner"
import { Slogan } from "../../components/pages/Home/Slogan"
import { Collection } from "../../components/pages/Home/Collections"
import { Advertising } from "../../components/pages/Home/Advertising"
import { Vernost } from "../../components/Vernost";
import { Footer } from "../../components/Footer"

export function Home(){
    return(
        <>
            <Header />
            <NavBar />
            <Banner />
            <Slogan />
            <Collection />
            <Advertising />
            <Vernost />
            <Footer />
        </>
    )
}