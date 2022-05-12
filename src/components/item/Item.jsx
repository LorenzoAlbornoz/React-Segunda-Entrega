import React from 'react'
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

export default Item;