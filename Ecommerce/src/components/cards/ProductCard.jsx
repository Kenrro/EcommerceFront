import { useState } from "react"
import { CART_URI } from "../../api/Api"
import "./ProductCard.css"
export const ProductCard = ({id, name, price, description, productFamily, stock, addToCart}) => {
    const image = `https://unavatar.io/${name}`
    const [quantity, setQuantity] = useState(1)
    const token = localStorage.getItem("user-token")
    const chageQuantity = (e) => {
        const quantity = e.value 
        setQuantity(quantity)
    }
    const addProductToCart= () => {
        addToCart({
            productId: id,
            quantity
        })
    }
    return(
        <div className="wrap-product">
            <div className="product_wrap-image">
                <img src={image} alt="Product" />
            </div>
            <div className="product_wrap-content">
                <div className="wrap_name-price">
                    <span>{name}</span>
                    <span className="price">{price} €</span>
                </div>
                <div className="wrap_description">
                    <p>{description}</p>
                </div>
                <div className="wrap_quantity-and-buy">
                    <div className="wrap_quantity">
                        <button
                            type="button"
                            class="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
                            onClick={(e)=> {
                                const input = e.currentTarget.nextElementSibling
                                input.stepDown()
                                chageQuantity(input)
                            }}>◀</button>

                        <input
                            type="number"
                            min={0}
                            max={stock}
                            onChange={chageQuantity}
                            value={quantity}/>

                        <button
                            type="button"
                            class="w-6 h-6 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
                            onClick={(e)=> {
                                const input = e.currentTarget.previousElementSibling
                                input.stepUp()
                                chageQuantity(input)
                            }}>▶</button>
                    </div>
                    <button
                    onClick={addProductToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}