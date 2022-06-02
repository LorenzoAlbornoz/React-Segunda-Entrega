import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/CartContex'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <BrowserRouter>
    <CartContextProvider>
      <div className="App border border-1 border-primary"

      >
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer saludo={'Productos'} />} />
            <Route path="/categoria/:id" element={<ItemListContainer saludo={'Producto'} />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />



            <Route path="/*" element={<Navigate to='/' replace />} />

          </Routes>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
