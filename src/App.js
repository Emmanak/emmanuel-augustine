import React from 'react';
import './App.css';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/navbar';
import ProjectSetup from './components/projectdetails';


function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>

      
      
      <Router>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/project/:type/:id" component={ProjectSetup}></Route>
        </Switch>
      </Router>

    </React.Fragment>
    
  );
}

export default App;
