import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedProjects from './components/featuredprojects';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherProjects from './components/otherprojects';
import HeaderVideo from './components/header'
import AboutMe from './components/aboutme';

function App() {
  return (
    <React.Fragment>
      <HeaderVideo></HeaderVideo>
      <AboutMe></AboutMe>
      <div id="featuredProjects" className="container">
        <FeaturedProjects>

        </FeaturedProjects>
      </div>

      <div id="otherProjects" className="container">
        <OtherProjects>

        </OtherProjects>
      </div>
    </React.Fragment>
    
  );
}

export default App;
