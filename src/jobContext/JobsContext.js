import React, {createContext,useReducer} from 'react';
import { JobsReducer, INITIAL_STATE } from '../reducers/jobsReducer';

export const JobsContext = createContext();




export default function JobContextProvider({children}){
  const [state,dispatch] = useReducer(JobsReducer,INITIAL_STATE);

  return (
    <JobsContext.Provider value={[state,dispatch]}>
      {children}
    </JobsContext.Provider>)
  }
