import React,{useState} from 'react'
import {Container,Row,Col,Card,Modal,ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ModalJob from '../ModalJob';
import ReactHtmlParser from 'react-html-parser';

import './style.css';
import image from '../../assets/images/no-image.jpeg';
 

export default function DescriptionJob(props) {

  const [showModal,setShowModal] = useState(false);

  const handleCose = () => {
    setShowModal(!showModal);
  }

  const {
    id,
    title,
    location,
    description,
    company,
    type,
    company_logo,
    company_url,
    how_to_apply
  } = props.jobs;


  return (

    <Container fluid="lg" className="description-job_container">
      <Link to="/">
        <label className="description-job_label">
          <FaArrowLeft/> Sell all positions
        </label>
      </Link>
      <Row>
        
        <Col lg={8} md={8}>
          <div className="description-job_pageheader" >
            <span>{type}/{location}</span>
            <label>{title}</label>
          </div>
          {ReactHtmlParser(description)}
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={company_logo || image} />
            <Card.Body>
              <Card.Title>
                <div className="decription-job_cardtitle">
                  <span>{company}</span>
                  <button onClick={()=> setShowModal(true)}>other jobs 1</button>
                </div>
              </Card.Title>
              <Card.Text>
                <div className="description-job_cardbody">
                  <span>Link: <a href={company_url}>{`${ReactHtmlParser(company_url) || 'sem link'}`}</a></span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
      <Modal
        size="xl"
        show={showModal}
        onHide={handleCose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="job-item_header">
          <Modal.Title id="example-modal-sizes-title-lg">
            Showing 5 JObs at Company-name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
          <ListGroup.Item>
            <h1>shshj</h1>
            <h1>shshj</h1>
            <h1>shshj</h1>
          </ListGroup.Item>
        </ListGroup>
        </Modal.Body>
     </Modal>
    </Container>
  )
}
