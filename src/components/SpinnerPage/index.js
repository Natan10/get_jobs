import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


import './style.css';

function SpinnerPage() {
  return (
    <div className="container-spinner">
      <Spinner 
        animation="grow"
        className="spinner"  />
    </div>
  );
}

export default SpinnerPage;