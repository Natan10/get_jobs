import React, {useEffect,useState,useContext,memo} from 'react';
import {JobsContext} from '../../jobContext/JobsContext';
import {useParams} from 'react-router-dom';

import DescriptionJob from '../DescriptionJob';


function SingleJob() {

  const [job,setJob] = useState({});
  const [job_qtd,setJobQtd] = useState({});
  const [state]= useContext(JobsContext);
  const {id} = useParams();

  const {jobs} = state;

  useEffect(() => { 
      
      const job_item = jobs.find(item => item.id === id);
      const job_qtd_item = jobs.filter(item => item.id !== id && item.company === job.company);
      
      if(job_qtd_item.length > 0) {
        setJobQtd(job_qtd_item)
      }
      setJob(job_item);
      
  },[id, job.company, jobs]);
  
  return (<DescriptionJob jobs={job} jobQtd={job_qtd} />)
  
}


export default memo(SingleJob);