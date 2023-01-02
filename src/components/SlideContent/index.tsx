import { Button } from "../Button"
import "./styles.scss"

export const SlideContent = () => {
    return (
        <div className="TextSlideContent">
            <div>
                <h1 className="titleSlideContent">Summer <br />Collection</h1>
                <p className="subTitleSlideContent">Separamos os melhores looks para você neste 2019</p>
            </div>
            <Button value="Shop Now" />
        </div>
    )
}