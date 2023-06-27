import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Images } from '../../assets';
import "../style.scss";


export default function Header() {
  return ( 
      <Navbar className='Header' collapseOnSelect expand="md" >
        <Container style={{maxWidth:"1134px"}}>
          <Navbar.Brand href="/"><img src={Images.Logo} alt='Travlog' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto CstmNav"  >
              <Nav.Link to="/" className='active'>Home</Nav.Link>
              <Nav.Link to="/">Discover</Nav.Link>
              <Nav.Link to="/">Special Deals</Nav.Link>
              <Nav.Link to="/">Contact</Nav.Link> 
            </Nav>
            <Nav className='RightNavbarLink'>
              <Nav.Link to="/">Log In</Nav.Link>
              <Nav.Link to="/" className='Signupnav'>Sign Up</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
  )
}
