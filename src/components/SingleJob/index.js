import React, {useEffect,useState,useContext} from 'react';
import {JobsContext} from '../../jobContext/JobsContext';
import {useParams} from 'react-router-dom';

import DescriptionJob from '../DescriptionJob';


export default function SingleJob() {

  const [job,setJob] = useState({});
  const [job_qtd,setJobQtd] = useState({});
  const [state]= useContext(JobsContext);
  const {id} = useParams();

  const {jobs,filterJobs} = state;

  useEffect(() => { 
      const job_item = jobs.find(item => item.id === id);
      const job_qtd_item = filterJobs.filter(item => item.company === job.company && item.id !== job.id);

      if(job_qtd_item.length > 0) {
        setJobQtd(job_qtd_item)
      }
      setJob(job_item);
  },[filterJobs, id, job.company, job.id, jobs]);
  

  return (<DescriptionJob jobs={job} jobQtd={job_qtd} />)
  
}
