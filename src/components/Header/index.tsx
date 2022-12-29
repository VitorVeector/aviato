import { Logo } from "../Logo"
import "./styles.scss"
import { SlCallEnd, SlBag } from "react-icons/sl";

export const Header = () => {
    return (
        <div className="headerComponent">
            <div className="components">
                <div className="phoneNumber">
                    <SlCallEnd id="SlPhone" />
                    <p>11 4191 4399</p>
                </div>
                <Logo />
                <div className="itemCart">
                    <SlBag id="SlBag" />
                    <p>(0) - <b>R$ 0,00</b></p>
                </div>
            </div>
        </div>
    )
}