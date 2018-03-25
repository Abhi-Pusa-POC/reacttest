import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link,Route,Switch} from 'react-router-dom'; 
import Home from './Components/Home';
import About from './Components/About';


class App extends Component {
  render() {
    return (
      
          <Router>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
              <Switch>
                <Route exact path="/" component= {Home}></Route>
                <Route exact path="/about" component={About}></Route>
              </Switch>
            </div>
          </Router>
    );
  }
}

export default App;
