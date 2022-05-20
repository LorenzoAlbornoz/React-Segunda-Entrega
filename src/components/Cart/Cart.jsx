import { userCartContext } from "../../context/CartContex"

const Cart = () => {
const { cartList, vaciarCarrito } = userCartContext()

    return (
      <div>
{cartList.map(producto => <li>{producto.name} - price: {producto.price} - cantidad: {producto.cantidad}</li>)}
<button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    )
  }
  
  export default Cart
  