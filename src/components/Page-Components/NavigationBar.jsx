import {Link, NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(){
  return (
    <Navbar expand="sm" bg="tertiary">

      <Container className="m-0">

        <Nav.Link to='/Home' className="nav-link px-2" id="nav-links" as={Link} activeclassname="active">Home</Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <Nav.Link to='/CharacterLibrary' className="nav-link px-2" id="nav-links" as={NavLink} activeclassname="active">Character Library</Nav.Link>

            <Nav.Link to='/Comics' className="nav-link px-2" id="nav-links" as={Link} activeclassname="active">Comics</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )

}

export default NavigationBar;