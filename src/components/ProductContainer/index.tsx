
import { useState } from "react"
import { Button } from "../Button"
import "./styles.scss"

export const ProductContainer = () => {
    const [items, setItems] = useState<number>(0)

    return (
        <div className="ProductContainer">
            <div className="images">
                <div className="mainImage" />

                <div className="otherImages">
                    <div className="firstImg" />
                    <div className="secondImg" />
                    <div className="thirdImg" />
                    <div className="fourthImg" />
                </div>
            </div>
            <div className="description">
                <div className="descriptionText">
                    <h2>Product Est Quis Euismod</h2>
                    <h1>R$ 155.99</h1>

                    <p>But I must explain to you how all this mistaken idea of ouncing  and  aising pain was born and I will give you a complete count of ut I must explain to you how all this aken idea of enouncing pleasure born and I will give you a complete account of</p>
                </div>
                <div className="measure">
                    <p>Cores</p>
                    <div className="colors">
                        <span className="blue"></span>
                        <span className="select pink"></span>
                        <span className="violet"></span>
                        <span className="green"></span>
                    </div>
                    <p>Tamanhos</p>
                    <div className="sizes">
                        <span>p</span>
                        <span className="select">m</span>
                        <span>g</span>
                        <span>xg</span>
                        <span>xxg</span>
                    </div>

                    <div className="addItem">
                        <div>
                            <p className="minus" onClick={() => setItems(items - 1)}>-</p>
                            <p className="number">{items}</p>
                            <p className="some" onClick={() => setItems(items + 1)}>+</p>
                        </div>
                        <Button value="Comprar" />
                    </div>
                    <div className="secondDescription">
                        <div>
                            <h1>Descrição</h1>
                            <p>-</p>
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus quasi sunt hic dolorem incidunt, fugit neque culpa expedita reiciendis possimus. Harum quam aliquam corrupti cupiditate consequatur dolorem aut eligendi sunt?</p>
                    </div>
                    <div className="specifications">
                        <p>Especificações</p>
                        <span>+</span>
                    </div>
                </div>
            </div>
        </div>
    )
}