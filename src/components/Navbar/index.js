import React from 'react';
import {Container,Col} from 'react-bootstrap';
import {Navbar,Nav} from 'react-bootstrap';


import './style.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary">
      <Container fluid="lg">
          <Col className="navbar_column">
            <Navbar.Brand href="#home">Give JObs</Navbar.Brand>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Col>
      </Container>
    </Navbar>
  )
}

