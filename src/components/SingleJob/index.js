import React, {useEffect,useState,useContext} from 'react';
import {JobsContext} from '../../jobContext/JobsContext';
import {useParams} from 'react-router-dom';

import DescriptionJob from '../DescriptionJob';


export default function SingleJob() {

  const [job,setJob] = useState({});
  const [state]= useContext(JobsContext);
  const {id} = useParams();

  const {jobs,} = state;

  useEffect(() => { 
      const job = jobs.find(item => item.id === id);
      setJob(job);
      console.log(job)
  },[id, jobs]);
  

  return (<DescriptionJob jobs={job} />)
  
}
