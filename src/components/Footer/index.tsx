import "./styles.scss"
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footContainer">
                <div className="footerBorder">
                    <div className="navFooter">
                        <div className="footerLink">
                            <ul>
                                <li>Contato</li>
                                <li>Fretes e entrega</li>
                                <li>Como comprar</li>
                                <li>Trocas e devoulução</li>
                            </ul>
                        </div>
                        <div className="footerLink">
                            <ul>
                                <li>sobre</li>
                                <li>na mídia</li>
                                <li>segurança</li>
                                <li>políticas</li>
                            </ul>
                        </div>
                        <div className="footerInput">
                            <p>Cadastre-se e receba nossas novidades</p>
                            <input type="text" className="footInput" placeholder="CADASTRAR" />
                        </div>
                    </div>
                </div>
                <div className="foot">
                    <div className="footContainer">
                        <p>COPYRIGHT © 2019</p>
                        <div>
                            <p>FAQ</p>
                            <p>Minha conta</p>
                            <p>Meus pedidos</p>
                        </div>
                        <div className="footIcons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaPinterest />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}