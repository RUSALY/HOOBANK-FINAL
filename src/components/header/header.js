import React from 'react';
import './header.css'
import { Container, Navbar , Nav} from 'react-bootstrap';
import logo from "../../assets/logo.svg"

const Header = () => {
    return (
        <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='logo-nav'>
            <img src={logo} alt="" />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
};

export default Header;