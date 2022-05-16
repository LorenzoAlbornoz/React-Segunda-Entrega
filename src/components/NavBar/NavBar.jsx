import { Container,Navbar,NavDropdown,Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
// import { Navbar } from 'react-bootstrap/Navbar'
// import { NavDropdown } from 'react-bootstrap/NavDropdown'
// import { Nav } from 'react-bootstrap/Nav'

const array = [
    {idCategoria: '1', name: 'Fundas', nameButton: 'Fundas'},
    {idCategoria: '2', name: 'Accesorios', nameButton: 'Accesorios'},
    {idCategoria: '3', name: 'Vidrios', nameButton: 'Vidrios'},
]
const NavBar = () => {
    // console.log(children)

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <NavLink 
                    to="/" 
                    // className={ ({isActive}) => isActive ? 'AlgunaClase' : 'otraClase'}
                >React-Bootstrap</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    {array.map(param => <NavLink key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>) }
                    {/* <NavLink to='/categoria/remeras'>Remeras</NavLink>
                    <NavLink to='/categoria/gorras'>Gorras</NavLink>                    */}
                </Nav>
                {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                    </Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
                <CartWidget/>
                </Container>
            </Navbar>           
        </>
    )
}

export default NavBar
/*import React from 'react';
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

export default NavBar*/
