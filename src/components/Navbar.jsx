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










// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary d " >
// <div style={{
//     display:'flex',alignItems:'center'
// }}>
// <img src="./img/logo.png" alt="logo"  style={{width:'100px'}}/>
//         <Navbar.Brand href="#home">Digital marketing agency</Navbar.Brand>
// </div>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className='n'>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Services</Nav.Link>
//             <Nav.Link href="#link">Portfolio</Nav.Link>
//             <Nav.Link href="#link">Clients & Partners</Nav.Link>
//             <NavDropdown title="About" id="basic-nav-dropdown">
              
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link">Let’s Talk</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
    
//     </Navbar>
//   );
// }

// export default BasicExample;





// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1>Digital marketing agency</h1>
//       <ul>
//         <li><a href="#home" className="active">Home</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#clients">Clients & Partners</a></li>
//         <li><a href="#about">About Us</a></li>
//         <li><a href="#contact">Let’s Talk</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;