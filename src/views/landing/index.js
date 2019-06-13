import React, { Component } from 'react';
import './index.css';
import WelcomeTab from '../../components/welcomeTab';
import WebDevTab from '../../components/webDevTab';
import MobileDevTab from '../../components/mobileDevTab';
import MappingTab from '../../components/mappingTab';

class Landing extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
        <h1>Dennis Corvi</h1>
      </div>

<div className="col-md-2">
      <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a className="nav-link active" id="v-pills-welcome-tab" data-toggle="pill" href="#v-pills-welcome" role="tab" aria-controls="v-pills-welcome" aria-selected="true">Welcome</a>
  <a className="nav-link" id="v-pills-webdev-tab" data-toggle="pill" href="#v-pills-webdev" role="tab" aria-controls="v-pills-webdev" aria-selected="false">Web Projects</a>
  <a className="nav-link" id="v-pills-mobiledev-tab" data-toggle="pill" href="#v-pills-mobiledev" role="tab" aria-controls="v-pills-mobiledev" aria-selected="false">Mobile Projects</a>
  <a className="nav-link" id="v-pills-mapping-tab" data-toggle="pill" href="#v-pills-mapping" role="tab" aria-controls="v-pills-mapping" aria-selected="false">Mapping</a>
  <a className="nav-link" id="v-pills-dataa-tab" data-toggle="pill" href="#v-pills-dataa" role="tab" aria-controls="v-pills-dataa" aria-selected="false">Data Analysis</a>
  <a className="nav-link" id="v-pills-games-tab" data-toggle="pill" href="#v-pills-games" role="tab"  aria-selected="false">Python Games</a>
  <a className="nav-link" id="v-pills-thesis-tab" data-toggle="pill" href="#v-pills-thesis" role="tab"  aria-selected="false">Thesis</a>
  <a className="nav-link" id="v-pills-git-tab" data-toggle="pill" href="#v-pills-git" role="tab"  aria-selected="false">Github</a>
</div>

</div>

<div className="col-md-10">
<div className="tab-content" id="v-pills-tabContent">
  <div className="tab-pane fade show active" id="v-pills-welcome" role="tabpanel" aria-labelledby="v-pills-welcome-tab">
  <WelcomeTab/>
  </div>

  <div className="tab-pane fade" id="v-pills-webdev" role="tabpanel" aria-labelledby="v-pills-webdev-tab">
  <WebDevTab/>
  </div>

  <div className="tab-pane fade" id="v-pills-mobiledev" role="tabpanel" aria-labelledby="v-pills-mobiledev-tab">
  <MobileDevTab/>
  </div>

  <div className="tab-pane fade" id="v-pills-mapping" role="tabpanel" aria-labelledby="v-pills-mapping-tab">
  <MappingTab/>
  </div>

  <div className="tab-pane fade" id="v-pills-dataa" role="tabpanel" aria-labelledby="v-pills-dataa-tab">
  <div className="tabtext">
  <p>
  Data analysis work..
  </p>
  </div>
  </div>

  <div className="tab-pane fade" id="v-pills-games" role="tabpanel" aria-labelledby="v-pills-games-tab">
  <div className="tabtext">
  <p>
  Games created with Python..
  </p>
  </div>
  </div>

  <div className="tab-pane fade" id="v-pills-thesis" role="tabpanel" aria-labelledby="v-pills-thesis-tab">
  <div className="tabtext">
  <p>
  I completed an interdisplanary honors thesis during my studies at Bridgewater State University. The completed paper can be found through the link below.
  <br/> <br/> <a href="https://vc.bridgew.edu/honors_proj/203/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link To Thesis Portal</a></p>
  </div>
  </div>

  <div className="tab-pane fade" id="v-pills-git" role="tabpanel" aria-labelledby="v-pills-git-tab">
  <div className="tabtext">
  <p>
  Please check out my Github page for the code on all of my projects.
  <br/> <br/> <a href="https://github.com/dcorvi" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Link To Website</a></p>
  </div>
  </div>

</div>
</div>






      </div> //ends row
    );
  }
}

export default Landing;
