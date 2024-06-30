import { Header } from "../../components/Header"
import { NavBar } from "../../components/NavBar"
import { Banner } from "../../components/pages/Home/Banner"
import { Slogan } from "../../components/pages/Home/Slogan"

export function Home(){
    return(
        <>
            <Header />
            <NavBar />
            <Banner />
            <Slogan />
        </>
    )
}