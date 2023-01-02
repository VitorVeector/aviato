import "./styles.scss"

interface ButtonProps {
    value: string
}

export const Button = ({ value }: ButtonProps) => {
    return (
        <button className="btnStyle">
            <p>
                {value}
            </p>
        </button>
    )
}

