import React from 'react';
import {Container,Col,Navbar,Nav} from 'react-bootstrap';
 
import './style.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary" className="navbar_component">
      <Container fluid="lg">
        <Col className="navbar_column">
          <Navbar.Brand>
            <a href="/">
              GetJobs
            </a>
          </Navbar.Brand>
          <Nav>
            <Nav.Item><a href="/">All Jobs</a></Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  )
}

