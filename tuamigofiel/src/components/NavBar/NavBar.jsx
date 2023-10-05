import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';

import './NavBar.css'

const NavBar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-danger-subtle">
          <Container>
            <Link to='/' className='logo'>TU AMIGO FIEL</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="categorias me-auto">
                  <NavLink className="cat" to='/category/alimento'>ALIMENTO</NavLink>
                  <NavLink className="cat" to='/category/accesorios'>ACCESORIOS</NavLink>
                  <NavLink className="cat" to='/category/higiene'>HIGIENE</NavLink>
              </Nav>
              <Nav> 
                  <NavLink to="/cart" className="carrito"><CartWidget /> </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavBar