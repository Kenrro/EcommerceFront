import { useContext, useEffect, useState } from "react";
import { CloseIcon } from "../Icons"
import { CART_URI } from "../../api/Api";
import "./cart.css"
import { useFetch } from "../../hooks/useFetch";
import { CartContext } from "../../context/CartContext";

export const Cart = ({isOpen ,toggleCart}) => {
    const {cart, reloadCart, loading} = useContext(CartContext)
    
    
    return (
        <div className={`cart ${isOpen?"cart--open":""}`} >
        <header>
          <div className="wrap_close-button">
            <label htmlFor="close-cart"><CloseIcon></CloseIcon></label>
            <input id="close-cart" onChange={toggleCart} type="checkbox" hidden/>
          </div>
        </header>
        <section>
            {
                loading? 
                <div>Cargando...</div>:
                cart?.items?.map(item => (
                    <div>{item.productName}</div>
                ))
            }
        </section>
        <footer></footer>
      </div>
    )
}