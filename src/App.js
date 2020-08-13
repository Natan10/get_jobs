import React from 'react';

import NavbarComponent from './components/Navbar';
import Filters from './components/Filters';
import ListJobs from './components/ListJobs';
import Footer from './components/Footer';
import DescriptionJob from './components/DescriptionJob';


function App() {
  return (  
    <>
      <NavbarComponent/>
      
      
      <div className="container_main" style={{height:'100vh',}}>
     { /*<Filters/>
      <ListJobs/>*/}
      <DescriptionJob/>
      <Footer />
      </div>
      
    </>
  );
}

export default App;
