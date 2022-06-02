import Caso1 from "../../../Caso1"
import Caso2 from "../../../Caso2"
import { Input } from "../../../input"
import Intercambiabilidad from "../../../Intercambiabilidad"
import { useState } from "react"
import { userCartContext } from "../../context/CartContex"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import Item from "../Item/Item"




const ItemDetail = ({producto}) => {
  const [isItemCount, setIsItemCount] = useState(true)

  const {addToCart, cartList} = userCartContext()

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
      <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <h3>{producto.descripcion}</h3>
        <p>{producto.price}</p>
      
        {isItemCount ? 
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/> 
                    :  
                    <>
                        <Link to='/'>
                            <button className="btn btn-outline-primary">Seguir Commprando</button>
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