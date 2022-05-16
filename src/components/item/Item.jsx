import { Link } from "react-router-dom"


const Item = ( {prod} ) => {
    // console.log(prod)
  return (
      <div            
            className='col-md-4'                                                
        >                        
        <Link to={`/detalle/${prod.id}`}>
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    {prod.price}                                                            
                </div>
                <div className="card-footer">  
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>                
                </div>
            </div>
        </Link>                                                                                
        </div>
    )
}

export default Item

/*import React from 'react'
import  ItemCount  from '../itemCount/ItemCount'
import './item.css'

const Item = ({name, price, foto, stock}) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} Fundas 🍺`);
  };

  return (
    <article className="product-card">
      <img className="product-card__image" src={foto} alt="" />

      <h3 className="product-card__name">{name}</h3>
      <span className="product-card__name">${price}</span>

      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </article>
  );
};

export default Item;*/