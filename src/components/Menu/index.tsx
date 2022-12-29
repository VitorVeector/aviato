import "./styles.scss"

export const Menu = () => {
    return (
        <div className="contentMenu">
            <nav>
                <ul className="list">
                    <li>
                        <button>Home</button>
                    </li>
                    <li>
                        <button>Camisas</button>
                    </li>
                    <li>
                        <button>Blusas</button>
                    </li>
                    <li>
                        <button>Calças</button>
                    </li>
                    <li>
                        <button>Assessórios</button>
                    </li>
                    <li>
                        <button>Outlet</button>
                    </li>
                </ul>
            </nav>

        </div>
    )
}