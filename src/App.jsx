import { useEffect, useState} from 'react'
import { FaBeer } from 'react-icons/fa';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContex'
import {ControlledInput, LoadingComponent, TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6} from './ComponenteEjemplosCondicionales'

function App() {

  const [bool, setBool] = useState(true)// function
  const [prods, setProd] = useState([])// function

  //console.log(CartContext)
  return (

    <BrowserRouter>
    <CartContextProvider>
      <div className="App border border-1 border-primary"
      //onClick={saludar}
      >
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer saludo={'Productos'} />} />
            <Route path="/categoria/:id" element={<ItemListContainer saludo={'Producto'} />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />



            <Route path="/*" element={<Navigate to='/' replace />} />
            {/* <Contador initial={1} stock={5} onAdd /> */}
          </Routes>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App


/*import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [boll, setBoll] = useState(true)
  const[personas, setPersonas] = useState([])

  useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone')
    .then((respuesta) => respuesta.json())
    .then((resp) => setPersonas(resp.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <NavBar className="App-header" />
        {personas.slice(0,10).map((item, id)=>(
        <li key={id} >{item.title}</li>
        ))}
      <div>
       
        <ItemListContainer/>
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;*/
