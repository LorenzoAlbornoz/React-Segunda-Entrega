import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const userCartContext = () => useContext(CartContext)

const CartContextProvider = ({ Children }) => {
    const [cartList, setCartList] = useState([])


    function addToCart(item) {
        setCartList([
            ...cartList,
            item
        ])
    }

    //const eliminarItem = (id) => {

    //}

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }} >
            {Children}
        </CartContext.Provider>
    )
}

export default CartContextProvider