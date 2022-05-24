import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const userCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
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
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider