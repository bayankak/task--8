import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const NavbarCompon = () => {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      
        <div style={{display:'flex',alignItems:'center', justifyContent:'space-around'}}>
        <img src="./img/logo.png" alt="logo" style={{width:"100px"}}/>
        <Navbar.Brand href="#" className='logotext'>Digital marketing agency</Navbar.Brand>
        </div>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" id='home'>Home</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Clients & Partners</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Who & Why</NavDropdown.Item>
              <NavDropdown.Item href="#">Internship</NavDropdown.Item>
              <NavDropdown.Item href="#">Achievement</NavDropdown.Item>
              
              <NavDropdown.Item href="#">Search for ID</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Let’s Talk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
  
}

export default NavbarCompon;












