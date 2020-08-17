import React,{useContext,useEffect,useState} from 'react';
import {Container,Button} from 'react-bootstrap';
import Filters from '../Filters';
import JobItem from '../JobItem';
import SpinnerPage from '../SpinnerPage';
import { ToastContainer,toast } from 'react-toastify';


import {JobsContext} from '../../jobContext/JobsContext';
import {AddJobs,AddFilterJobs} from '../../jobContext/actions';

import './style.css';
import api from '../../services/api';

export default function ListJobs() {

  const [showButton,setShowButton] = useState(false);
  const [state,dispatch] = useContext(JobsContext);
  const [setContainer,setShowContainer] = useState('');
  const [page,setPage] = useState(2);
  const [load,setLoad] = useState(true);

  useEffect(()=>{
    async function Fetch(){
      try{
        const response = await api.get('positions.json');
        setShowButton(true);
        setShowContainer('disabled');
        dispatch(AddJobs(response.data));
        setLoad(!load);
      }catch(err){
        toast.error("Request error, try again ...")
      }
    }
    Fetch();
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
      toast.error("Request error, try again ...");
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
        dispatch(AddFilterJobs(response.data));
        
      }else { setShowButton(false) }

    }catch(err){
      toast.error("Request error, try again ...");
    }
  }

  return (
      <Container fluid="lg" className={`list-jobs_container--${setContainer}`}>
        {load === true ? (
        <SpinnerPage />):
        (
        <>
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
        </>
        )}

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
        <ToastContainer />
      </Container>

            

  )
}
