import React from 'react';
import {Modal} from 'react-bootstrap';

export default function ModalJob({state}) {

  return (
    <Modal
        size="lg"
        show={state}
        onHide={!state}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
  )
}
