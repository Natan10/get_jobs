import React,{useContext,useEffect} from 'react'
import {Container} from 'react-bootstrap';
import Filters from '../Filters';
import JobItem from '../JobItem';

import {JobsContext} from '../../jobContext/JobsContext';
import {AddJobs} from '../../jobContext/actions';

import api from '../../services/api';

import './style.css';

export default function ListJobs() {

  const [state,dispatch] = useContext(JobsContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    try{
      const response = await api.get('/positions.json');
      dispatch(AddJobs(response.data))
    }catch(err){
      alert('Erro na requisição!');
    }
  },[dispatch]);

  
  return (
      <Container fluid="lg" className="list-jobs_container">
        <Filters />
          <h1 className="list-jobs_label">Showing 1 - 50 of 237 jobs</h1>
          <ul className="list-unstyled">
            {state.jobs.map(jobItem => (
              <JobItem 
                key={jobItem.id}
                job={jobItem} />
            ))}
          </ul>
      </Container>
   
  )
}
