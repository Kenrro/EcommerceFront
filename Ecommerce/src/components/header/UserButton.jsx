import { UserIcon } from "../Icons"

export const UserButton = () => {
    return (
        <> 
            <div className="cart_button header-layout_button">
                <label htmlFor="togle_cart"><UserIcon></UserIcon></label>
                <input type="checkbox" name="" id="togle_cart" hidden/>
                <aside className="cart_aside">
                <span>Carro</span>
                </aside>
            </div>
            <span>Cart</span>

            
        </>
    )
}