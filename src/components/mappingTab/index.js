import React, { Component } from 'react';
import './index.css';

class MappingTab extends Component {
  render() {
    return (
      <div className="row">

      <div className="row">
      <div className="col-md-12">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="noaa-tab" data-toggle="tab" href="#noaa" role="tab" aria-controls="noaa" aria-selected="true">NOAA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="avon-tab" data-toggle="tab" href="#avon" role="tab" aria-controls="avon" aria-selected="false">Town of Avon</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="massdep-tab" data-toggle="tab" href="#massdep" role="tab" aria-controls="massdep" aria-selected="false">MassDEP</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="bsu-tab" data-toggle="tab" href="#bsu" role="tab" aria-controls="bsu" aria-selected="false">BSU Mapping Projects</a>
        </li>
      </ul>
      </div>

      <div className="col-md-12">
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="noaa" role="tabpanel" aria-labelledby="noaa-tab">
        <div className="tabtext">
        <p>
        From December 2017 to present, I've held the position of Research Associate under contract with ECS Federal supporting NOAA Fisheries. In this role I was employed under the Social Science Branch at the Northeast Fishery Science Center in Woods Hole, Massachusetts.
        <br/>
        I spent much of this time designing a database of geospatial information and analyzing geospatial/temporal information for 2 projects that involved protected species.<br/> <br/></p>
        </div>
        </div>

        <div class="tab-pane fade" id="avon" role="tabpanel" aria-labelledby="avon-tab">
        <div className="tabtext">
        <p>
        Avon content
        <br/>
        </p>
       </div>
        </div>

        <div class="tab-pane fade" id="massdep" role="tabpanel" aria-labelledby="massdep-tab">
        <div className="tabtext">
        <p>
        MassDEP content
        <br/>
        </p>
        </div>
        </div>

        <div class="tab-pane fade" id="bsu" role="tabpanel" aria-labelledby="bsu-tab">
        <div className="tabtext">
        <p>
        BSU content
        <br/>
        </p>
        </div>
        </div>
      </div>
      </div>
      </div>

      </div>
    );
  }
}

export default MappingTab;
