import React,{useState} from 'react'
import {Container,Row,Col,Card,Modal,ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ReactHtmlParser from 'react-html-parser';

import JobItem from '../JobItem';

import './style.css';
import image from '../../assets/images/no-image.jpeg';
 

export default function DescriptionJob(props) {

  const [showModal,setShowModal] = useState(false);

  const handleCose = () => {
    setShowModal(!showModal);
  }

  const {
    title,
    location,
    description,
    company,
    type,
    company_logo,
    company_url
  } = props.jobs;

  const job_items = props.jobQtd;
  

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
                  {job_items.length > 0 && 
                  <button onClick={()=> setShowModal(true)}>{`other jobs ${job_items.length}`}</button>}
                </div>
              </Card.Title>
              <Card.Text>
                <div className="description-job_cardbody">
                  {(company_url !== 'null' | company_url !== "http:") ? 
                  (<span>  
                    Link: <a href={company_url}>{`${ReactHtmlParser(company_url)}`}</a>
                  </span>):
                  (<span>Sem link</span>)
                  }
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
            Showing {job_items.length} JObs at {company}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup variant="flush">
          {job_items.length > 0 && job_items.map(item => {
           return<ListGroup.Item onClick={()=> setShowModal(!showModal)}>
                  <JobItem job={item}/>
                </ListGroup.Item>
          })}
        </ListGroup>
        </Modal.Body>
     </Modal>
    </Container>


  
  )
}

