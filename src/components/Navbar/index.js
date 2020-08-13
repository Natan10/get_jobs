import React from 'react';
import {Container,Col,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
 
import './style.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary" className="navbar_component">
      <Container fluid="lg">
        <Col className="navbar_column">
          <Navbar.Brand>
            <Link to="/">
              GetJobs
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item><Link to="/">All Jobs</Link></Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  )
}

