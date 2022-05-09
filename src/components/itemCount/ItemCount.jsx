import React, { useState } from 'react';


export const ItemCount = ({ stock, inicial, onAdd }) => {

  // desafio clase 4 - Creamos un contador para elegir la cantidad de productos que queremos comprar

  const [cuantity, setCuantity] = useState(inicial);

  const resta = () => {
    if (cuantity > 1) {
      setCuantity(cuantity - 1);
    }
  };

  const suma = () => {
    if (cuantity < stock) {
      setCuantity(cuantity + 1);
    }
  };

  //podemos asignarle a onAdd el valor de cuantity y mostrarlo en un console.log
  const onClick = () => { onAdd = console.log(cuantity) }

  return (
    <section className='count'>
      <ul className='count__list'>
        <li><button type='button' onClick={resta}>-</button></li>
        <li>{cuantity}</li>
        <li><button type='button' onClick={suma}>+</button></li>
      </ul>
      <button
        type='submit'
        className='count__button'
        value={cuantity}
        onClick = { onClick }
      >
        AGREGAR AL CARRITO
      </button>
    </section>
  );
};