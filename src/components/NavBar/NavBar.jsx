import React from 'react';
import './navBar.css'
import CartWidget from '../CartWidget/CartWidget';

 const NavBar = () => {

  return (
    <div className="App__nav">
       
        <ul className="nav__bar">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar
