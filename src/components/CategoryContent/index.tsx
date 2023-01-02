import { useEffect, useState } from "react"
import "./styles.scss"
import axios from "axios"
import { IProducts } from "../Populars"
import { FaThLarge, FaThList } from "react-icons/fa"
import { Product } from "../Product"



export const CategoryContent = () => {

    const [products, setProducts] = useState<IProducts[]>()

    useEffect(() => {
        axios.get("/api/products.json")
            .then(data => setProducts(data.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="categoryContent">
            <div className="selectCategory">
                <button className="activeBtn">Feminino</button>
                <button>Masculino</button>
                <button>Acessórios</button>
            </div>
            <div className="filter">
                <div className="filterText">
                    <p>Ordenar: <b>Name</b></p>
                    <p>Vizualizar: <b>{products?.length}</b></p>
                </div>
                <div className="filterIcon">
                    <p>View</p>
                    <FaThLarge className="activeFilter" />
                    <FaThList />
                </div>
            </div>
            <div className="categoryItems">
                {
                    products?.map(product => (
                        <Product key={product.id} name={product.name} price={product.price} photo={product.photo} />
                    ))
                }
            </div>
            <div className="pagination">
                <ul>
                    <li className="activePage">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>5</li>
                    <li><button>{`>`}</button></li>
                </ul>
            </div>
        </div>
    )
}