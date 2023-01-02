import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { Populars } from "../../components/Populars"
import { Products } from "../../components/Products"
import { Slider } from "../../components/Slider"
import "./styles.scss"

export const Home = () => {
    return (
        <div className="content">
            <Header />
            <Menu />
            <Slider />
            <Products />
            <Populars />
            <Footer />
        </div>
    )
}