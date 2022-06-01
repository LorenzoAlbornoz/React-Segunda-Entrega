import { Link } from "react-router-dom"
import { userCartContext } from "../../context/CartContex"

const Cart = () => {
  const { cartList, vaciarCarrito, precioTotal, removeItem } = userCartContext()

  return (
    <div>
      {cartList.length === 0 ?
        <div className="container mt-5">
          <label className="alert alert-warning">NO HAY PRODUCTOS EN EL CARRITO</label><br />
          <Link to='/' >
            <button className="btn btn-outline-primary"> Seleccionar productos</button>
          </Link>
        </div>
      :

        <>
          {cartList.map(producto => <div key={producto.id}>
            <li>
              <img src={producto.foto} style={{ width: 60 }} />
              {producto.name} - price: {producto.price} - cantidad: {producto.cantidad}

              <button className="btn btn-outline-primary" onClick={() => removeItem(producto.id)}> X </button>
            </li>
          </div>)}
          <h2>El precio total es: ${precioTotal()}</h2>
          <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar Carrito</button>
        </>
      }
    </div>
  )
}

export default Cart
