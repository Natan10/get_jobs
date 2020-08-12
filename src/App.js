import React from 'react';

import NavbarComponent from './components/Navbar';
import Filters from './components/Filters';
import ListJobs from './components/ListJobs';

function App() {
  return (  
    <>
      <NavbarComponent/>
      <Filters/>
      <ListJobs/>
    </>
  );
}

export default App;
