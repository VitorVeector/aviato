import "./styles.scss"

interface BannerCategoryProps {
    name: string
}

export const BannerCategory = ({ name }: BannerCategoryProps) => {
    return (
        <div className="bannerContent">
            <div className="bannerText">
                <h1>{name}</h1>
                <p>Home - {name}</p>
            </div>
        </div>
    )
}