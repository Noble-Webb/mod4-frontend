import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Users from "./components/UserInput.js";
import Notes from "./components/Notes";
import Login from "./components/Login";
import './App.css';

class App extends  Component {
  render(){
    return (
      <div className="App">
        {/* <Navbar icon="paint brush" title="Painterest" description="out app" /> */}
      <Switch>
        {/* <Route component={About} path='/about' />
        <Route component={Dashboard} path='/dashboard/:username/' /> */} 
        {/* <Route component={Login} path='/login' /> */}
        <Route component={Notes} path='/notes'  />
        <Route component={Users} path='/user' />
      </Switch>
      </div>
    );
  }
}

export default App;
