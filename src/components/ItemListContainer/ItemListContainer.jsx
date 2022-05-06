import { useEffect, useState } from "react"

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