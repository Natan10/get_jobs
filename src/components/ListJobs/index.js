import React,{useContext,useEffect,useState} from 'react'
import {Container,Button} from 'react-bootstrap';
import Filters from '../Filters';
import JobItem from '../JobItem';

import {JobsContext} from '../../jobContext/JobsContext';
import {AddJobs} from '../../jobContext/actions';

import './style.css';
import api from '../../services/api';

export default function ListJobs() {

  const [showButton,setShowButton] = useState(false);
  const [state,dispatch] = useContext(JobsContext);
  const [setContainer,setShowContainer] = useState('');
  const [page,setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async ()=>{
    try{
      const response = await api.get('/positions.json');
      setShowButton(true);
      setPage(page+1);
      setShowContainer('disabled');
      dispatch(AddJobs(response.data));
    }catch(err){
      alert('Erro na requisição!');
    }
  },[dispatch]);

  const handleQuery = async ({search,location,full_time}) => {
    try{
      const response = await api.get('/positions.json',{
        params:{
          search: search || '',
          location: location || '',
          full_time:full_time || false
        }
      })
      
      response.data.length > 5 ? setShowContainer('disabled'):setShowContainer('activate');
      setShowButton(false);
      dispatch(AddJobs(response.data));
    }catch(err){
      alert('Erro na requisição');
    }
  }

  const handlePage = async () => {
    try{
      const response = await api.get('/positions.json',{
        params:{
          page: page
        }})
      
      if(response.data.length > 0){
        setPage(page+1);
        dispatch(AddJobs(response.data));
      }else { setShowButton(false) }

    }catch(err){
      alert('Erro na requisição');
    }
  }

  
  return (
      <Container fluid="lg" className={`list-jobs_container--${setContainer}`}>
        <Filters handleQuery={handleQuery}/>
          <h1 className="list-jobs_label">Showing {state.jobs.length} jobs</h1>
          <ul className="list-unstyled">
            {state.jobs.map(jobItem => (
              <JobItem 
                key={jobItem.id}
                job={jobItem} />
            ))}
          </ul>
          {showButton && (
          <Button 
            variant="outline-primary" 
            onClick={handlePage}
            className="list-jobs_button">
            More Awesome Jobs
          </Button>
          )}
      </Container>
   
  )
}
