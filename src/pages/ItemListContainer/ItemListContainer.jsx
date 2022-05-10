import React from 'react'
import { ItemCount } from '../../components/itemCount/ItemCount'
import { ItemList } from '../../components/itemList/ItemList'
import products from '../../data/catalogo.json'

export const ItemListContainer = ({ greeting }) => {

    // Desafio clase 5 - creamos una promesa simulando una demora en el servidor para pasar un catalogo de productos a otro componente

  let miPrimeraPromise = new Promise((resolve, reject) => {

    setTimeout(function(){

      //Podemos crear un catalogo.json, una constante con objetos, usar Apis como https://fakestoreapi.com/ o crear productos random con https://www.mockaroo.com/
      resolve(products)
      
    }, 2000);
  });

  miPrimeraPromise.then( "con un .then podemos guardar el resultado de la promesa en un useState o variable" )


    return (
        //pasamos los valores de las props que necesitamos para ITemCount con un stock, valor inicial y un valor vacio, llamado onAdd
        // ItemList deberia mapear nuestro array de productos para crear un <Item /> por c/u. Entonces deberiamos pasarle la lista completa de productos

        <>
            <div>{greeting}</div>
            <ItemList />
            <ItemCount stock={5} inicial={1}/>
        </>
    )
}