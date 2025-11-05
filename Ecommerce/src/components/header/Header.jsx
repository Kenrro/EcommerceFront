import { MenuHeader } from "../menus/MenuHeader"
import "./header.css"

export const Header = () => {

    return(
    <header className="header_layout">
        <div className="header_column">
            <h1>Ecomerce</h1>
        </div>
        <div className="header_column header_column-buttons">
            <MenuHeader></MenuHeader>
        </div>
    </header>
    )
}