import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import "./styles.scss"

export const Home = () => {
    return (
        <div className="content">
            <Header />
            <Menu />
        </div>
    )
}