import React from "react";
import App from '../App';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
function navbar() {
  return (

    
    <div>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/formcheckup">formcheckup</Nav.Link>
            <Nav.Link href="../customformvalidation">customvalidation</Nav.Link>
            <Nav.Link href="/api">apishow data</Nav.Link>
            <Nav.Link href="/companyuserdata">companyuserdata</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default navbar;