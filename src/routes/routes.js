import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import NavbarComponent from '../components/Navbar';
import Footer from '../components/Footer';
import ListJobs from '../components/ListJobs';
import SingleJob from '../components/SingleJob';
import HowItWorks from '../pages/HowItWorks';
import Api from '../pages/Api';

export default function Routes() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
        <Switch>
          <Route exact path="/" component={ListJobs} />
          <Route path="/job/:id" component={SingleJob} />
          <Route path="/faq" component={HowItWorks} />
          <Route path="/api" component={Api} />
        </Switch>
      <Footer/>
    </BrowserRouter>
  )
}