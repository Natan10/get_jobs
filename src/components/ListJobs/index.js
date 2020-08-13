import React from 'react'
import {Container} from 'react-bootstrap';
import Filters from '../Filters';
import JobItem from '../JobItem';

import './style.css';

export default function ListJobs() {
  return (
    <Container fluid="lg" className="list-jobs_container">
      <Filters />
      <h1 className="list-jobs_label">Showing 1 - 50 of 237 jobs</h1>
      <ul className="list-unstyled">
        <JobItem/>
        <JobItem/>
        <JobItem/>
      </ul>
    </Container>
  )
}
