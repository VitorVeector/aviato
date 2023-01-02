import "./styles.scss"

interface ProductPageBannerProps {
    name: string
}


export const ProductPageBanner = ({ name }: ProductPageBannerProps) => {
    return (
        <div className="ProductPageBanner">
            <h3>Home - {name}</h3>
        </div>
    )
}