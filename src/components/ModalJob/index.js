import React from 'react';
import {Modal,ListGroup} from 'react-bootstrap';
import JobItem from '../JobItem';

import './style.css';


export default function ModalJob({state,onHide}) {

  const handleCose = () => {
    onHide(false)
  }



  return (
    <Modal
        size="xl"
        show={state}
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
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
          </ListGroup.Item>
        </ListGroup>
        </Modal.Body>
      </Modal>
  )
}
