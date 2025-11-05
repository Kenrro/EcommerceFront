import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { CART_URI } from "../api/Api";

export const CartContext = createContext();

export function CartProvider( {children} ) {
    const [cart, setCart] = useState()
    const {data, loading, error, refetch} = useFetch(
                {
                    url: CART_URI,
                    authorization: true,
        
                }
            )
    const {data : addData,refetch : addFetch, loading : addLoading, error : addError} = useFetch(
        {
            url: `${CART_URI}/item`,
            method: "POST",
            authorization: true,
            autoFetch: false

        }
    )
    const reloadCart = () => {
        refetch();
    }
    const addToCart = async (product) => {
        await addFetch(product)
    }
    useEffect(()=>{
        if(data) setCart(data)
    }, [data])
    // add effect
    useEffect(()=>{
        if(addData) {
            reloadCart()
        }
    },[addData])
    return(
        <CartContext.Provider value={
            {cart,
            reloadCart,
            loading,
            addToCart,
            addLoading,
            addError}
            
        }>{children}</CartContext.Provider>
    )
}