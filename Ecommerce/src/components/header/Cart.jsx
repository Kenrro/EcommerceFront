import { CartIcon, CloseIcon } from "../Icons"
import { CART_URI } from "../../api/Api"
import "./cart.css"
import { useEffect, useState } from "react"
export const Cart = () => {
  const token = localStorage.getItem("user-token")
  const [cart, setCart] = useState({});
  useEffect(()=> {
    getCart()
  }, [])
  async function getCart() {
    // TODO: refactor all and finish cart, should reload cart
    try {
      const response = await fetch(CART_URI, {
        method: "GET",
        headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
      })
      const data = await response.json();
      setCart(data)

      console.log(data)
    } catch(err){
      console.error(err)
    }
  }
  const onChecked = () => {
    const aside = document.querySelector(".cart-button_aside");
    aside.classList.toggle("cart-button_aside--open")
  }
  const cartIsOk = Object.keys(cart).length > 0;
  return (
    <div className="cart-button" id="wrap_cart-button_button">
      <div className="cart-button_button">
        <label htmlFor="toggle-cart"><CartIcon></CartIcon></label>
        <input onChange={onChecked} type="checkbox" id="toggle-cart" hidden/>
      </div>
      <label htmlFor="toggle-cart">Cart</label>
      <aside className="cart-button_aside">
        <header>
          <label htmlFor="toggle-cart"><CloseIcon></CloseIcon></label>
        </header>
        <section>
            {
              !cartIsOk?
              <div className="wrap_charging-cart">

              </div>:
              <ul>
                {
                  cart.items.map(item => (
                    <li>{item.productName}</li>
                  ))
                }
              </ul>
            }   
        </section>
        <footer>

        </footer>
      </aside>
    </div>
  )
}