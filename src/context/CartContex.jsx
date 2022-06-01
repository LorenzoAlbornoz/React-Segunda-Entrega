import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const userCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])


    function addToCart(item) {
        const index = cartList.findIndex(producto => producto.id === item.id)
        if (index !== -1) {
            const cantidadVieja = cartList[index].cantidad
            console.log(cantidadVieja)

            cartList[index].cantidad = cantidadVieja + item.cantidad
            console.log (cartList[index].cantidad)
            
            setCartList([...cartList])
        } else {
            setCartList([
                ...cartList,
                item
            ]);
        }
    }

    const removeItem = (id) => {
        setCartList (cartList.filter(prod => prod.id !== id))
    }

    const cantidadTotal = () => {
        return cartList.reduce((contador, prod) => contador += prod.cantidad ,0)
    }

    const precioTotal = () => {
        return cartList.reduce((contador, prod) => contador + (prod.cantidad * prod.price) ,0)
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            removeItem,
            cantidadTotal,
            precioTotal
        }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider