import axios from "axios"
import { Button } from "../Button"
import { Product } from "../Product"
import "./styles.scss"

import { useEffect, useState } from "react"

export interface IProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    available: boolean;
    photo: string
}

export const Populars = () => {

    const [products, setProducts] = useState<IProducts[]>()

    useEffect(() => {
        axios.get("/api/products.json")
            .then(data => setProducts(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="popularContent">
            <h1 className="popularTitle">Populares</h1>
            <div className="popularContainer">
                {
                    products?.map(product => (
                        <Product key={product.id} name={product.name} price={product.price} photo={product.photo} />
                    ))
                }
            </div>
            <Button value="Ver mais produtos" />
        </div>
    )
}