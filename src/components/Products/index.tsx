import "./styles.scss"

export const Products = () => {
    return (
        <div className="productsContainer">
            <h1 className="productsTitle">Tendências</h1>
            <div className="products">
                <div className="otherProducts">
                    <div className="productElement menDresses">
                        <h2>Men Dresses</h2>
                        <p>ver produtos {'>'}</p>
                    </div>
                    <div className="productElement jewellery">
                        <h2>Jewellery</h2>
                        <p>ver produtos {'>'}</p>
                    </div>
                </div>
                <div className="productElement womenDresses">
                    <h2>Women Dresses</h2>
                    <p>ver produtos {'>'}</p>
                </div>
            </div>
        </div>
    )
}