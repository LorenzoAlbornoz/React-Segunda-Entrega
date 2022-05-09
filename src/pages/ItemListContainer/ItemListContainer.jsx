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


/*import { useEffect, useState } from "react"

const ItemListContainer = ({ greeting = 'saludo' }) => {
    const [count, setCount] = useState(0)
    //const [fecha, setFecha] = useState(Date())
    const [boll, setBoll] = useState(true)

    useEffect (() => {
console.log  ('Ejecuta siempre 1')
return () => {
    console.log('desmontando')
}
})

//useEffect (() => {
//    console.log  ('llamada a api 2')
//    }, [])

//useEffect (() => {
//console.log  ('cuando cambie boll 3')
//}, [boll, count])

function contador (){
    //count ++
    setCount(count + 10)
    //setFecha(Date())
    //console.log (count)
  }

  function boleano (){
    //count ++
    setBoll(!boll)
    //setFecha(Date())
    //console.log (count)
  }

console.log('ItemList Container 4')

    return (
        <div>
            {greeting}
            {count}
      <button onClick={contador}>Comprar!</button>
      <button onClick={boleano}>Comprar!</button>
        </div>
    )
}

export default ItemListContainer




/*import {useEffect, UseState} from "react"


const productos = [
    {id: '1', categoria: 'Funda', name: 'Evo Gem', price: 37, foto:'../components../img/evo gem.png'},
    {id: '2', categoria: 'Funda', name: 'Reforzada', price: 37, foto:'../components../img/funda reforzada.png'},
    {id: '3', categoria: 'Funda', name: 'Rainbow', price: 37, foto:'../components../img/rainbow.png'},
    {id: '4', categoria: 'Funda', name: 'R', price: 37, foto:'../components../img/s-l1600.jpg'},
    {id: '5', categoria: 'Funda', name: 'Silicone Cade 6 a 11', price: 37, foto:'../components../img/silicone case 6 a 11.jpg'},
    {id: '6', categoria: 'Funda', name: 'Silicone case linea 12', price: 37, foto:'../components../img/silicone case linea 12.jpg'},
    {id: '7', categoria: 'Funda', name: 'Silicone case linea 13', price: 37, foto:'silicone case linea 13.jpg'}
]


const getFetch = new promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (productos)
    }, 3000)
})

const ItemListContainer = ({ greeting = 'saludo' }) => {
const [productos, setProductos] = UseState([])
const [boll, setBoll] = UseState (true)
    
useEffect(() => {
getFetch
.then (respuesta => console.log (respuesta))
.catch((err) => console.log(err))
.finally(()=>console.log('promesa finalizada'))
}, [])

console.log (productos)
    return (
        <div>
            {greeting}
            {[1,2,3,4].map(nro => <li>{nro}</li>)}

            <button onClick={() => setBoll(!boll)}>Click</button>
        </div>
    )
}

export default ItemListContainer


/*
const ItemListContainer = ({ greeting = 'saludo' }) => {
    const [count, setCount] = useState(0)
    //const [fecha, setFecha] = useState(Date())
    const [boll, setBoll] = useState(true)

    useEffect (() => {
console.log  ('Ejecuta siempre 1')
return () => {
    console.log('desmontando')
}
})

//useEffect (() => {
//    console.log  ('llamada a api 2')
//    }, [])

//useEffect (() => {
//console.log  ('cuando cambie boll 3')
//}, [boll, count])

function contador (){
    //count ++
    setCount(count + 10)
    //setFecha(Date())
    //console.log (count)
  }

  function boleano (){
    //count ++
    setBoll(!boll)
    //setFecha(Date())
    //console.log (count)
  }

console.log('ItemList Container 4')

    return (
        <div>
            {greeting}
            {count}
      <button onClick={contador}>Comprar!</button>
      <button onClick={boleano}>Comprar!</button>
        </div>
    )
}
return (
    <div> {greeting}</div>
)

export default ItemListContainer
*/



/*
const getFetch = new promise((resolve, reject) => {
    setTimeout(() =>{
        resolve (productos)
    }, 3000)
})

const ItemListContainer = ({ greeting = 'saludo' }) => {
const [productos, setProductos] = useState([])
const [boll, setBoll] = useState (true)
    
useEffect(() => {
getFetch
.then (respuesta => console.log (respuesta))
.catch((err) => console.log(err))
.finally(()=>console.log('promesa finalizada'))
}, [])

console.log (productos)
    return (
        <div>
            {greeting}
            {[1,2,3,4].map(nro => <li>{nro}</li>)}

            <button onClick={() => setBoll(!boll)}>Click</button>
        </div>
    )
}

export default ItemListContainer*/