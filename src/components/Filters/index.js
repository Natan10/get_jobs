import React,{useState} from 'react'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,Button
} from 'react-bootstrap';

import './style.css';

export default function Filters({handleQuery}) {

  const [search, setSearch] = useState('');
  const [location , setLocation] = useState('');
  const [full_time, setFullTime] = useState(false);


  const handleSubmit = () => {
   handleQuery(
     {search,
      location,
      full_time})
  }

  return (
    <Container fluid="lg" className="filter_container">
      <Row className="filter_row">
        <Col lg={4} md={4} className="filter_first_input">
          <FormControl 
            id="basic-url" 
            aria-describedby="basic-addon3" 
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)} />
        </Col>
        <Col lg={6} md={6}>
          <InputGroup className="mb-3">
            <FormControl 
              placeholder="Job Description" 
              value={search}
              onChange={e => setSearch(e.target.value)}/>
            <InputGroup.Append>
              <InputGroup.Text>Full Time</InputGroup.Text>
              <InputGroup.Checkbox 
                checked={full_time}
                onChange={e => setFullTime(e.target.checked)}/>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col lg={2} md={2}>
          <Button 
            variant="success" 
            className="filter_button"
            onClick={handleSubmit}
            >Search</Button>
        </Col>
      </Row>     
    </Container>
  )
}
