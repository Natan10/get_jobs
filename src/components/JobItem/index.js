import React from 'react';
import {Media} from 'react-bootstrap';

import './style.css';


export default function JobItem() {
  return (
    <Media as="li" className="job-item">
      <img
        width={90}
        height={85}
        className="mr-3"
        src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdjZIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b6200b4b104afd1fd69f69e28c1869175b746db1/Screen%20Shot%202020-08-11%20at%2010.51.15%20AM.png"
        alt="Generic placeholder"
      />
      <Media.Body>
        <div className="job-item_title">
          <h5>Senior Data Engineer</h5>
          <p>Boston Children's Hospital - <span>Full Time</span></p>
        </div>
        <div className="job-item_type">
          <span>Boston</span>
          <span>Tue Aug 11 15:47:25 UTC 2020</span>
        </div>         
      </Media.Body>
    </Media>
  )
}
