import React,{memo} from 'react';
import {Media} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';
import image from '../../assets/images/no-image.jpeg';

import {formatDate} from '../../utils/formatData';


function JobItem(props) {
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
        width={100}
        height={90}
        className="mr-3"
        src={company_logo || image}
        alt="Company logo"
      />
      <Media.Body>
        <div className="job-item_title">
          <Link to={`/job/${id}`}>
            <h5>{title}</h5>
          </Link>
          <p>{company} - <span>{type}</span></p>
        </div>
        <div className="job-item_type">
          <span>{location}</span>
          <span>{formatDate(created_at)}</span>
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

export default JobItem;