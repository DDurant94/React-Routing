import {Link, NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(){
  return (
    <Navbar expand="sm" className="bg-body-tertiary">

      <Container className="m-0">

        <Link to='/Home' className="nav-link px-2" id="nav-links">Home</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="">

            <NavLink to='/CharacterLibrary' className="nav-link px-2" id="nav-links">Character Library</NavLink>

            <Link to='/Comics' className="nav-link px-2" id="nav-links">Comics</Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )

}

export default NavigationBar;