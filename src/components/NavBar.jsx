import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar expand="lg">
            <Container>
                {/* Logo  */}
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                {/* Toggle Icon  */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* NavBar List  */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links">
                        <NavLink to="/">WatchList</NavLink>
                        <NavLink to="/watched">Watched</NavLink>
                        <NavLink to="/add" className='Btn'>Add</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

