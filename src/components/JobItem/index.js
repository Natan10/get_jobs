import React from 'react';
import {Media} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './style.css';


export default function JobItem(props) {
  const {
    id,
    title,
    location,
    company,
    created_at,
    type,
    company_logo,
  } = props.job;

  return (
    <Media as="li" className="job-item">
      <img
        width={90}
        height={85}
        className="mr-3"
        src={company_logo}
        alt="Company logo"
      />
      <Media.Body>
        <div className="job-item_title">
          <h5>{title}</h5>
          <p>{company} - <span>{type}</span></p>
        </div>
        <div className="job-item_type">
          <span>{location}</span>
          <span>{created_at}</span>
        </div>         
      </Media.Body>
    </Media>
  )
}

//JobItem.propTypes = {
//  id: PropTypes.string.isRequired,
//  title: PropTypes.string.isRequired,
//  location: PropTypes.string.isRequired,
//  company: PropTypes.string.isRequired,
//  created_at: PropTypes.string,
//  type: PropTypes.string,
//  company_logo: PropTypes.string,
//}