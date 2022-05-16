import Item from "../Item/Item"

const ItemDetail = ({producto}) => {
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
      </div>
      {/* <div></div> */}
    </div>
    // <Item prod={producto} />
  )
}

export default ItemDetail