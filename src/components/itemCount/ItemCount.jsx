import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const restar = () => {
      if (count > 1) {
        setcount(count - 1);
      }
    };
  
    const sumar = () => {
      if (count < stock) {
        setcount(count + 1);
      }
    };

    return (
        <div>
            { count }<br/>
            <button onClick={sumar} className="btn btn-primary">+</button>
            <button onClick={restar} className="btn btn-primary">-</button><br/>
            <button onClick={()=> onAdd(count)} className="btn btn-primary">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount

/*import React from 'react';
import { useState } from 'react';

import './itemCount.css'


const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;*/

