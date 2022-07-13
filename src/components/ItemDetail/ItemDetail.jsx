import { useState } from "react"
import { useCartContext } from "../../context/CartContex"
import { Link } from "react-router-dom"

import ItemCount from "../ItemCount"



const ItemDetail = ({producto}) => {
  const [isItemCount, setIsItemCount] = useState(true)

  const {addToCart, cartList} = useCartContext()

const onAdd = (cant) =>{
  console.log (cant)
  addToCart({...producto, cantidad: cant})
  setIsItemCount(false)
}

console.log(cartList)

  return (
    <div className="row mt-5" >
    <div className="col mt-5">
        <img className="" src={producto.foto} />
      </div>
      <div className="col mt-5">
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <h3>{producto.descripcion}</h3>
        <p>{producto.price}</p>
      
        {isItemCount ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/> 
                    :  
                    <>
                        <Link to='/'>
                            <button className="btn btn-outline-primary">Seguir Comprando</button>
                        </Link>
                        <Link to='/cart'>
                            <button className="btn btn-outline-success">Ir al carrito</button>
                        </Link>
                    </>
                }


      </div>
    </div>
  )
}

export default ItemDetail