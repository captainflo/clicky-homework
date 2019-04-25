import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clickimg from "./components/pages/clickimg";
// import Navbar from "./components/pages/navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <Navbar/> */}
          <Route exact path="/" component={Clickimg}  />
        </Router>
      </div>
      
    );
  }
}

export default App;
