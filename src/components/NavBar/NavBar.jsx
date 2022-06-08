import { Container, Navbar,  Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContex'
import CartWidget from '../CartWidget/CartWidget'


const array = [
    { idCategoria: '1', name: 'Fundas', nameButton: 'Fundas' },
    { idCategoria: '2', name: 'Accesorios', nameButton: 'Accesorios' },
    { idCategoria: '3', name: 'Vidrios', nameButton: 'Vidrios' },
]
const NavBar = () => {
    const { cantidadTotal } = useCartContext()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ color: 'white' }}>
                <Container>
                    <NavLink
                        to="/"

                    >Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {array.map(param => <NavLink key={param.id} to={`/categoria/${param.name}`}>{param.nameButton}</NavLink>)}

                        </Nav>
                    </Navbar.Collapse>
                    {cantidadTotal() !== 0 && cantidadTotal()}
                    <CartWidget />
                </Container>
            </Navbar>
        </>

    )
}

export default NavBar