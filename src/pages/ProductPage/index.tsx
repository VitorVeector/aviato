import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import "./styles.scss"

export const ProductPage = () => {
    return (
        <div className="content">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}