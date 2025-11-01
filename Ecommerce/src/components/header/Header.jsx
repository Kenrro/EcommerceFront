import { Cart } from "./Cart"
import { UserButton } from "./UserButton"
import "./header.css"

export const Header = () => {

    return(
    <header className="header_layout">
        <div className="header_column">
            <h1>Ecomerce</h1>
        </div>
        <div className="header_column header_column-buttons">
            <div className="header_util">
                <input type="text" />
            </div>
            <div className="header_util">
                <Cart></Cart>
            </div>
            <div className="header_util">
                <UserButton></UserButton>
            </div>
        </div>
    </header>
    )
}