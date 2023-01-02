import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { Populars } from "../../components/Populars"
import { ProductContainer } from "../../components/ProductContainer"
import { ProductPageBanner } from "../../components/ProductPageBanner"
import "./styles.scss"

export const ProductPage = () => {
    return (
        <div className="content">
            <Header />
            <Menu />
            <ProductPageBanner name="Gravida Est Quis Euismod" />
            <ProductContainer />
            <Populars title="Produtos relacionados" />
            <Footer />
        </div>
    )
}