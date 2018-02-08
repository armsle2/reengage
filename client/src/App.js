import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserHomepage from './pages/UserHomepage';
import BusHomepage from './pages/BusHomepage';

class App extends Component {
  componentDidMount(){
    console.log('this is working')
  }

  render(){
    return(
      <Router>
        <div>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/userhomepage" component={UserHomepage} />
        <Route exact path="/bushomepage" component={BusHomepage} />
        </div>
       
      </Router>
    );
  }
}

export default App;
