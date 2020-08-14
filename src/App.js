import React from 'react';
import Routes from './routes/routes';
import JobContextProvider from './jobContext/JobsContext';



function App() {
  return (  
    <>
    <JobContextProvider>
      <Routes />
    </JobContextProvider>
    </>
  );
}

export default App;
