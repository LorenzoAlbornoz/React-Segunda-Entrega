import { userCartContext } from "../../context/CartContex"

const Cart = () => {
const { cartList, vaciarCarrito, precioTotal, removeItem } = userCartContext()

    return (
      <div>
{cartList.map(producto => <div key={producto.id}>
                          <li>
                            {producto.name} - price: {producto.price} - cantidad: {producto.cantidad}
                          </li>
                          <button className="btn btn-outline-primary" onClick={()=>removeItem(producto.id)}> X </button>
                          </div>)}
<h2>El precio total es: ${precioTotal()}</h2>
<button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    )
  }
  
  export default Cart
  