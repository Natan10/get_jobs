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
      {/*<Filters/>
      <ListJobs/>*/}
      <div className="container_main">
        <DescriptionJob />
      </div>
      <Footer />
    </>
  );
}

export default App;
