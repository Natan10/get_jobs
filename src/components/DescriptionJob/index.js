import React,{useState} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ModalJob from '../ModalJob';

import './style.css';


export default function DescriptionJob() {

  const [showModal,setShowModal] = useState(false);


  return (
    <Container fluid="lg" className="description-job_container">
      <Link to="/">
        <label className="description-job_label">
          <FaArrowLeft/> Sell all positions
        </label>
      </Link>
      <Row>
        
        <Col lg={8} md={8}>
          <div className="description-job_pageheader">
            <span>Full time/Boston</span>
            <label>TEste que faltou</label>
          </div>
          <p><strong>About Sticker Mule</strong></p> <p>Sticker Mule is the Internet's most "kick ass" brand. We are privately-owned, profitable, and powered by a globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 countries, and we're always looking for more exceptional engineers.</p> <p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting problems.</p> <p><strong><a href="https://www.stickermule.com/about">See more about our teams here</a></strong></p> <p><strong>We offer</strong></p> <ol> <li>Remote work with flexible schedules</li> <li>Varied, interesting technical challenges to solve</li> <li>A fun "no bullshit" work environment</li> </ol> <p><strong>We like you to know</strong></p> <ol> <li>Docker</li> <li>NextJS</li> <li>React</li> <li>NodeJS</li> <li>GraphQL</li> <li>Postgres</li> <li>Redis</li> <li>Familiarity with Ruby</li> <li>Excellent communication skills (English)</li> <li>Degree in Computer Science or equivalent practical experience</li> </ol> <p><strong>Compensation and benefits</strong></p> <ol> <li>$99,000-$135,000+</li> <li>$10,000 signing bonus</li> <li>4 weeks vacation</li> </ol>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Img variant="top" src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjZIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6200b4b104afd1fd69f69e28c1869175b746db1/Screen%20Shot%202020-08-11%20at%2010.51.15%20AM.png" />
            <Card.Body>
              <Card.Title>
                <div className="decription-job_cardtitle">
                  <span>Title</span>
                  <button onClick={()=> setShowModal(!showModal)}>other jobs 1</button>
                </div>
              </Card.Title>
              <Card.Text>
                <div className="description-job_cardbody">
                  <span>Link: </span>
                  <span>how to apply: Cvlink</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalJob state={showModal} onHide={setShowModal}/>
    </Container>
  )
}
