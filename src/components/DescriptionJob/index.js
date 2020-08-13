import React,{useState} from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import ModalJob from '../ModalJob';

import './style.css';


export default function DescriptionJob() {

  const [showModal,setShowModal] = useState(false);


  return (
    <Container fluid="lg" className="description-job_container">
      <label className="description-job_label"> <FaArrowLeft/> Sell all positions</label>
      <Row>
        
        <Col lg={8} md={8}>
          <div className="description-job_pageheader">
            <span>Full time/Boston</span>
            <label>TEste que faltou</label>
          </div>
          <p><strong>Description</strong></p> <p>Headquartered in New York City, AiCure produces mobile and cloud-based applications that leverage Computer Vision and Machine Learning to assist pharmaceutical &amp; healthcare businesses to improve drug development and population health.</p> <p>When patients use our apps, information on their medication intake is recorded, which allows stakeholders to gain insights and to take actions (patient alerts, etc.). Our apps identify the patient (face verification), verify that patients are taking the right medication (pill recognition), and that they are actually taking their medication (action recognition).</p> <p>As a Full Stack engineer, you’ll architect and build product features from the database all the way to the UI. You’ll collaborate closely with colleagues in Design and Product. Working in a small, cross functional team, your work will have significant impact on healthcare for everyone on the planet! Experience in healthcare is NOT required.</p> <p><strong>Key responsibilities</strong></p> <ul> <li>Design, implement, launch, and maintain highly visible and scalable services and applications.</li> <li>Analyze and improve efficiency, scalability, and stability of current system.</li> <li>Build and improve production monitoring.</li> <li>Write unit tests and documentation.</li> <li>Write well designed, testable, efficient code by using best software development practices.</li> <li>Stay abreast of best trends by researching new tools, as well as enhancing and further developing existing solutions.</li> <li>A passion for performance, debugging and benchmarking.</li> </ul> <p><strong>Requirements</strong></p> <ul> <li>Bachelor’s degree in Computer Science or equivalent experience.</li> <li>Experience with modern JavaScript/Angular 2 coding, testing, debugging, and automation techniques.</li> <li>Experience with Java and the Spring Framework.</li> <li>Experience in building and maintaining microservices.</li> <li>Solid expertise with algorithms and design patterns.</li> <li>Deliver testable, maintainable, and high-quality code.</li> <li>Experience in working with cloud services (preferably AWS) and client-server applications.</li> <li>Excellent analytical and problem-solving skills, and can communicate your ideas, especially to those not technologically proficient.</li> <li>Value team success over personal success.</li> <li>Hold yourself and others accountable.</li> <li>Experience with Ruby on Rails a plus.</li> </ul> <p><strong>Philosophy</strong></p> <p>Our selection process is highly competitive because we only hire the best, most enthusiastic candidates. Openness, flexibility, creativity, ownership, and accountability are our main pillars. We love solving challenging problems and creating solutions that have real impact on people- at scale.</p> <p><strong>Impact</strong></p> <p>We're on a mission to revolutionize healthcare and when you join us, you'll have the opportunity of having real, tangible impact not only on individuals directly using our technology, but also on how drugs are tested and brought to market across the world. That means everyone on the planet will benefit from what you do. You'll be inspired every day because you'll be making a real difference and you'll see it happen. In real time and at scale.</p> <p><strong>People</strong></p> <p>You'll work with brilliant, positive people who thrive in an interdisciplinary, multi-cultural environment, and are curious, creative, and focused on executing our mission. You'll be up to speed in the the most recent advances in Artificial Intelligence (Machine Learning, Computer Vision, Big Data) while solving challenging problems that must take into account many fascinating aspects of human psychology and behavior. You'll work with Scientists, Engineers, Designers, and Medical Doctors, to create innovative products that scale in an environment that encourages learning, collaboration, and growth.</p>
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
