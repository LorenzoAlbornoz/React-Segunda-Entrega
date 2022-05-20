import Caso1 from "../../../Caso1"
import Caso2 from "../../../Caso2"
import { Input } from "../../../input"
import Intercambiabilidad from "../../../Intercambiabilidad"
import { userCartContext } from "../../context/CartContex"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({producto}) => {

  const {addToCart, cartList} = userCartContext()

const onAdd = (cant) =>{
  Console.log (cant)
  addToCart({...producto, cantidad: cant})
}

console.log(cartList)

  return (
    <div className="row" >
      <div className="col">
        <img className="" src={producto.foto} />
      </div>
      <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.categoria}</h2>
        <h3>{producto.description}</h3>
        <p>{producto.price}</p>
        {/*<Intercambiabilidad/>
        <Caso2/>*/}
        {/*<button onClick={()=> addToCart(4)}>Agregar al carrito</button>*/}
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail