import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UserHomepage from './pages/UserHomepage';
import RedeemRewards from './pages/RedeemRewards';
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
        <Route path="/userhomepage/:id" component={UserHomepage} />
        <Route exact path="/redeemrewards" component={RedeemRewards} />
        <Route  path="/bushomepage/:id" component={BusHomepage} />
        </div>    
      </Router>
    );
  }
}

export default App;
