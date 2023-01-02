import { BannerCategory } from "../../components/BannerCategory"
import { CategoryContent } from "../../components/CategoryContent"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import "./styles.scss"

export const Category = () => {
    return (
        <div className="content">
            <Header />
            <Menu />
            <BannerCategory name="Blusas" />
            <CategoryContent />
            <Footer />
        </div>
    )
}