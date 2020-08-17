import React from 'react'
import {Container,Navbar} from 'react-bootstrap';
import {FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import './style.css';

export default function Footer() {
  return (

    <Navbar expand="lg" bg="light" className="footer">
      <Container fluid="lg" className="footer_container">
        <div className="footer_links">
            <ul>
              <li><a href="https://github.com/blog" target="_blank">The Github Blog</a></li>
              <li><a href="https://github.com/contact" target="_blank">Contact</a></li>
              <li><a href="https://github.com/site/privacy" target="_blank">Privacy</a></li>
              <li>
                <Link to="/api">
                  Api
                </Link>           
              </li>
            </ul>
          </div>
          <div className="footer_icon">
            <FaGithub size={30}/>
          </div>
          <div className="footer_inc">
            <span>© 2020 GitHub Inc. All rights reserved.</span>
          </div>
      </Container>
    </Navbar>
  )
}




