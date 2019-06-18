import React, { Component } from 'react';
import './index.css';
import TTTMobile from '../../components/tttMobile';
import WeatherMobile from '../../components/weatherMobile';

class MobileDevTab extends Component {
  render() {
    return (
      <div className="row">

      <div className="row">
      <div className="col-md-12">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="ttt-tab" data-toggle="tab" href="#ttt" role="tab" aria-controls="ttt" aria-selected="true">Tic-Tac-Toe App</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="weather-tab" data-toggle="tab" href="#weather" role="tab" aria-controls="weather" aria-selected="false">Weather App</a>
        </li>
      </ul>
      </div>

      <div className="col-md-12">
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="ttt" role="tabpanel" aria-labelledby="ttt-tab">
        <div className="tabtext">
        <p>
        This native app is a simple Tic-Tac-Toe game that allows the users to play using their fingers on their mobile devices. It takes advantage of the native functions of either the IOS or Android mobile operating systems.
        <br/><br/>
        It was created using React Native. The code is hosted on Github and the mobile emulation is accomplished using Expo.<br/><br/>
        (Reload this page if you see a blank screen.)
        <br/>
        Note: wait times for mobile emulation are usually longer in the morning or afternoon.<br/><br/>
        <TTTMobile/>
        </p>
        </div>
        </div>

        <div class="tab-pane fade" id="weather" role="tabpanel" aria-labelledby="weather-tab">
        <div className="tabtext">
        <p>
        This native app is a simple weather app that uses an API to check the weather of location inputs.
        <br/><br/>
        It was created using React Native. The code is hosted on Github and the mobile emulation is accomplished using Expo.<br/><br/>
        <WeatherMobile/>
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

export default MobileDevTab;
