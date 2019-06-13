import React, { Component } from 'react';
import './index.css';
import Carousel from '../../components/carousel';

class WelcomeTab extends Component {
  render() {
    return (
      <div className="row justify-content-between">
        <p>
        Thanks for visiting my digital portfolio at (soon to be) denniscorvi2.com.
        </p>
        <p>
        I’m an aspiring software developer and GIS Analysist with database design experience. I've completed several web projects using both frontend and backend web development frameworks. I've designed and implemented web APIs and Views utilizing Flask, in order to build interactive web-based solutions. I’m currently an Associate Researcher at the NOAA Northeast Fisheries Science Center. In this position, I assist with the research of protected species, specifically sea turtles and right whales using geospatial and temporal data. Previously, I've served as a geospatial technician for the Town of Avon, MA under the department of public works where I assisted establish the town’s GIS program. I hold a bachelor’s degree from Bridgewater State University having double majored in Management Information Systems and Geography.
        </p>
        <p>
        I built this website using React to organize and document my digital work and to gain a better understanding of web development and web technologies. I'm constantly striving to improve upon my development and programming knowledge and skillsets. Samples of my code can be found on my Github repositories at <a href="https://github.com/dcorvi" target="_blank" rel="noopener noreferrer">https://github.com/dcorvi</a>.
        </p>
        <Carousel/>
      </div>
    );
  }
}

export default WelcomeTab;
