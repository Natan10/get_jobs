import React from 'react'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,Button
} from 'react-bootstrap';

import './style.css';

export default function Filters() {
  return (
    <Container fluid="lg" className="filter_container">
      <Row className="filter_row">
        <Col lg={4} md={4} className="filter_first_input">
          <FormControl id="basic-url" aria-describedby="basic-addon3" placeholder="Location" />
        </Col>
        <Col lg={6} md={6}>
          <InputGroup className="mb-3">
            <FormControl placeholder="Job Description"/>
            <InputGroup.Append>
              <InputGroup.Text>Full Time</InputGroup.Text>
              <InputGroup.Checkbox />
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col lg={2} md={2}>
          <Button variant="success" className="filter_button">Search</Button>
        </Col>
      </Row>     
    </Container>
  )
}
