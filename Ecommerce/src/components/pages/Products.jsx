import { useContext, useEffect, useState } from "react"
import { CART_URI, PRODUCTS_URI } from "../../api/Api";
import { ProductCard } from "../cards/ProductCard";
import "./products.css"
import { useFetch } from "../../hooks/useFetch";
import { CartContext } from "../../context/CartContext";
export const Products = () => {
    // Get products
    const {data, loading, error, refetch} = useFetch(
        {
            url: PRODUCTS_URI,
            authorization: true
        }
    )

    const {reloadCart, addToCart, addLoading, addError} = useContext(CartContext);
    

    
    if(loading) return(<h1>Cargando...</h1>)
    return(
        <div className="wrap-products">
            {
                data?.map(product => (
                    <ProductCard
                    addToCart={addToCart}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    productFamily={product.productFamily}
                    stock={product.stock}/>
                ))
            }
        </div>
    )
}