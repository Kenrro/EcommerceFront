import { useState } from "react";
import { Cart } from "../cards/Cart";
import { CartIcon } from "../Icons"
import "./cartButton.css";

export const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCart = ()=> setIsOpen(!isOpen)

  return (
    <div className="cart-button">
      <div className="wrap_button">
        <div className="button_icon">
          <label htmlFor="toggle-cart"><CartIcon></CartIcon></label>
          <input onChange={toggleCart} type="checkbox" id="toggle-cart" hidden/>
        </div>
        <label htmlFor="toggle-cart">Cart</label>
      </div>
      <Cart
      isOpen={isOpen}
      toggleCart={toggleCart}
      />
    </div>
  )
}