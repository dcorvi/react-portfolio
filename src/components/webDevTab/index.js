import React, { Component } from 'react';
import './index.css';

class WebDevTab extends Component {
  render() {
    return (
      <div className="row">

      <div className="row">
      <div className="col-md-12">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="massbay-tab" data-toggle="tab" href="#massbay" role="tab" aria-controls="massbay" aria-selected="true">Mass Bay Staffing Group</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nefaj-tab" data-toggle="tab" href="#nefaj" role="tab" aria-controls="nefaj" aria-selected="false">NEAFJS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="jp-tab" data-toggle="tab" href="#jp" role="tab" aria-controls="jp" aria-selected="false">JP's Upper Deck</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="omao-tab" data-toggle="tab" href="#omao" role="tab" aria-controls="omao" aria-selected="false">NOAA OMAO App</a>
        </li>
      </ul>
      </div>

      <div className="col-md-12">
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="massbay" role="tabpanel" aria-labelledby="massbay-tab">
        <div className="tabtext">
        <p>
        This website was built for a staffing firm, that specializes in accounting and finance positions.
        <br/>
        The website was built using Python through the Flask microframework and is hosted on Heroku.<br/> <br/> <a href="https://mass-bay-staffing.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link To Website</a></p>
        </div>
        </div>

        <div class="tab-pane fade" id="nefaj" role="tabpanel" aria-labelledby="nefaj-tab">
        <div className="tabtext">
        <p>
        New England Accounting & Finance Jobs was my capstone project during my training at Coding Temple. It is a job aggrigate website. An admin has the ability to add job postings to a PostgreSQL database through a form section on an admin panel. The job data is then populated on a job card on a public page with additional infomation for potential job seekers.
        <br/>
        The website was built using the React framework as a frontend and Flask as a backend and is hosted on Heroku.
        <br/> <br/> <a href="https://jobsboard-neafj-frontend.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link To Website</a></p>
       </div>
        </div>

        <div class="tab-pane fade" id="jp" role="tabpanel" aria-labelledby="jp-tab">
        <div className="tabtext">
        <p>
        JP's Upper Deck is a planned carpentry business website
        <br/> <br/>
        This website is currently under development.
        <br/> <br/> <button type="button" href="#" className="btn btn-primary disabled" target="_blank" rel="noopener noreferrer">Link To Website</button></p>
        </div>
        </div>

        <div class="tab-pane fade" id="omao" role="tabpanel" aria-labelledby="omao-tab">
        <div className="tabtext">
        <p>
        Before my software development training, I was approached by my supervisor at ECS Federal to construct a web app. I wasnt prepared to build the web app at the time but the idea of the app has stuck with me. I found the topic of the app so interesting and relivent to my professional experiences that I decided to try to build the app again with my new skillsets as a personal challange for myself. The particular NOAA office can be found here: <a href="https://www.omao.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA Office of Marine & Aviation Operations </a>.
        <br/> <br/>
        This web app is currently under development.
        <br/> <br/> <button type="button" href="#" className="btn btn-primary disabled" target="_blank" rel="noopener noreferrer">Link To Website</button></p>
        </div>
        </div>
      </div>
      </div>
      </div>

      </div>
    );
  }
}

export default WebDevTab;
