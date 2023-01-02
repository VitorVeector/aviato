import { useState } from "react"
import "./styles.scss"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

interface IProductProps {
    name: string,
    photo: string,
    price: number,
}

export const Product = ({ name, photo, price }: IProductProps) => {
    const [like, setLike] = useState(false)

    return (
        <div className="productContainer">
            <div className="imgProduct">
                <img src={photo} alt={name} />
            </div>
            <div className="dataProduct">
                <h3>{name}</h3>
                <div>
                    <p>R$ {price}</p>
                    <button onClick={() => setLike(!like)}>
                        {
                            like ? <AiFillHeart size={17} color="red" /> : <AiOutlineHeart size={17} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}