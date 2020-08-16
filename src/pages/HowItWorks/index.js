import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaRegCreditCard} from 'react-icons/fa';

import './style.css';
import how_it_works1 from '../../assets/images/how_it_works1.jpg';
import how_it_works2 from '../../assets/images/how_it_works2.jpg';


function HowItWorks() {
  return (
    <Container fluid="lg" className="container-how">
      <Row className="how_row">
        <div className="how-header">
          <span>How GitHub Jobs Works</span>
          <span>GitHub Jobs is a great place attract the best technical talent for your company's 
          open software development positions. Here's how:</span>
        </div>
        <Col lg={4}>
          <img 
            className="how-img"
            src={how_it_works1}
            alt="How it works 1"/>
          <div className="how-body">
            <span>Create & preview your listing</span>
            <p>See exactly how your listing will look before you publish live. Before creating a listing, you must login with your GitHub account and verify your email address.</p>
          </div>
        </Col>
        <Col lg={4}>
          <div className="how-image-card">
            <h1>$ 450.00</h1>
            <span>per listing</span>
            <ul>
              <li><FaCcVisa size={60}/></li>
              <li><FaCcMastercard size={60}/></li>
              <li><FaCcDiscover size={60}/></li>
              <li><FaRegCreditCard size={60}/></li>
            </ul>
          </div>
          <div className="how-body">
            <span>Pay with a major credit card</span>
            <p>Invoicing available on request for bulk orders. Email jobs@github.com for more info. Sorry, no recruitment agencies.</p>
          </div>
        </Col>
        <Col lg={4}>
          <img
            className="how-img"
            src={how_it_works2}
            alt="How it works 2"/>
          <div className="how-body">
            <span style={{lineHeight:'25px'}}>Your listing goes live immediately</span>
            <p>Listings are live for 30 days. We’ll send you a receipt and a link to change the listing.</p>
          </div>
        </Col>
        <div className="how-footer">
          <span>Questions? Submit a request via our {' '}
            <a href="https://support.github.com/contact?tags=jobs-support">contact form</a> and let's talk.</span>
        </div>
      </Row>
    </Container>
  );
}

export default HowItWorks;