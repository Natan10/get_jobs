import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import ListJobs from '../components/ListJobs';
import SingleJob from '../components/SingleJob';

export default function Routes() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
        <Switch>
          <Route exact path="/" component={ListJobs} />
          <Route path="/job/:id" component={SingleJob} />
        </Switch>
      <Footer/>
    </BrowserRouter>
  )
}