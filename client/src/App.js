import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  componentDidMount(){
    console.log('this is working')
  }

  render(){
    return(
    <Router>
      <div>
        <h1>Landing</h1>
      </div>
    </Router>
    );
  }
}

export default App;
