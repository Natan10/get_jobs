import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import './style.css';

function Api() {
  return (
    <Container fluid="lg" className="container-api">
      <div className="api-header">
        <h1>The Github Jobs API</h1>
      </div>
      <Row>
        <Col lg={9}>
          <div className="api-bloco1">
            <p>The GitHub Jobs API allows you to search, and view jobs with JSON over HTTP.
            To get the JSON representation of any search result or job listing, append .json to the URL you'd use on the HTML GitHub Jobs site.
            For example, when searching for Python jobs near New York on the site I am taken to this url:</p>

            <a href="https://jobs.github.com/positions?description=python&location=new+york">https://jobs.github.com/positions?description=python&location=new+york</a>
            <br></br><br></br>

            <p>To get the JSON representation of those jobs I just use positions.json:</p>
            <a href="https://jobs.github.com/positions.json?description=python&location=new+york">https://jobs.github.com/positions.json?description=python&location=new+york</a>
            <br></br><br></br>

            <h2>Pagination</h2>
            <p>The API also supports pagination. /positions.json, for example, will only return 50 positions at a time. You can paginate results by adding a page parameter to your queries.
            Pagination starts by default at 0.</p>
            <br></br>

            <h3>Examples</h3>
            <ul>
              <li>
                <a href="https://jobs.github.com/positions.json?description=ruby&page=1">https://jobs.github.com/positions.json?description=ruby&page=1</a>
              </li>
              <li>
                <a href="https://jobs.github.com/positions.json?page=1&search=code">https://jobs.github.com/positions.json?page=1&search=code</a>
              </li>
            </ul>
          </div>

          <div className="api-bloco2">
            <h2>GET /positions.json</h2>
            <p>Search for jobs by term, location, full time vs part time, or any combination of the three. All parameters are optional.</p>

            <h3>Parameters</h3>
            <ul>
              <li>description - A search term, such as "ruby" or "java". This parameter is aliased to search.</li>
              <li>location - A city name, zip code, or other location search term.</li>
              <li>lat -  A specific latitude. If used, you must also send long and must not send location.</li>
              <li>long - A specific longitude. If used, you must also send lat and must not send location.</li>
              <li>full_time - If you want to limit results to full time positions set this parameter to 'true'.</li>
            </ul>

            <h3>Examples</h3>
            <ul>
              <li>
                <a href="https://jobs.github.com/positions.json?description=python&full_time=true&location=sf">https://jobs.github.com/positions.json?description=python&full_time=true&location=sf</a>
              </li>
              <li>
                <a href="https://jobs.github.com/positions.json?search=node">https://jobs.github.com/positions.json?search=node</a>
              </li>
              <li>
                <a href="https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823">https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823</a>
              </li>
            </ul>
          </div>

          <div className="api-bloco3">
            <h2>GET /positions/ID.json</h2>
            <p>Retrieve the JSON representation of a single job posting.</p>

            <h3>Parameters</h3>
            <ul>
              <li>markdown — Set to 'true' to get the description and how_to_apply fields as Markdown.</li>
            </ul>
            
            <h3>Examples</h3>
            <ul>
              <li>
                <a href="https://jobs.github.com/positions/21516.json">https://jobs.github.com/positions/21516.json</a>
              </li>
              <li>
                <a href="https://jobs.github.com/positions/21516.json?markdown=true">https://jobs.github.com/positions/21516.json?markdown=true</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Api;