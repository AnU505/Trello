import React from 'react';
import Home from "./Pages/Home";
import SignUp from "./Pages/auth/SignUp";
import './App.css';

import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}>
      </Route>
      <Route exact path="/signup" component={SignUp} >
      </Route>
      </Router>
  );
}

export default App;
