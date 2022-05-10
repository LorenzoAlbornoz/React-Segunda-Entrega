import React from 'react';
import NavBar from './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = () => {

  return (
    <div className="App__nav">
        <img src={logo} alt="logo" className="logo"/>
        <ul className="nav__bar">
            <li>Mountain Bikes</li>
            <li>Plegables</li>
            <li>Electricas</li>
            <li>Monopatines</li>
        </ul>
        <CartWidget />
    </div>
  )
}
