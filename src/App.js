import React from 'react';

import NavbarComponent from './components/Navbar';
import Filters from './components/Filters';
import ListJobs from './components/ListJobs';
import Footer from './components/Footer';

function App() {
  return (  
    <div className="main">
      <NavbarComponent/>
      <Filters/>
      <ListJobs/>
      <Footer />
    </div>
  );
}

export default App;
