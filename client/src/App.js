import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserHomepage from './components/UserHomepage';

class App extends Component {
  componentDidMount(){
    console.log('this is working')
  }

  render(){
    return(
      <Router>
        <div>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/userhomepage" component={UserHomepage} />
        </div>
       
      </Router>
    );
  }
}

export default App;
