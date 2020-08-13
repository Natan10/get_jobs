import React from 'react';
import {Container,Col} from 'react-bootstrap';
import {Navbar,Nav} from 'react-bootstrap';


import './style.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary" className="navbar_component">
      <Container fluid="lg">
          <Col className="navbar_column">
            <Navbar.Brand href="#home">GetJobs</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Col>
      </Container>
    </Navbar>
  )
}

