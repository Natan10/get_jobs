import React from 'react';
import {Container,Col,Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import './style.css';
import logo from '../../assets/images/logo.png';


export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="primary" className="navbar_component">
      <Container fluid="lg">
        <Col className="navbar_column">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="logo app"
              />
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Item><a href="/">All Jobs</a></Nav.Item>
            <Nav.Item><a href="/faq">How It Works</a></Nav.Item>
            <Nav.Item><a href="/api">Api</a></Nav.Item>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  )
}

