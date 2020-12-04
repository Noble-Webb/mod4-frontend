import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNotesWorks } from "./actions/notes";
import User from "./components/User";
import Note from "./components/Note";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  componentDidMount(){
    fetch('http://localhost:3001/notes')
    .then(resp => resp.json())
    .then(notes =>{
      console.log(notes)
      this.props.fetchNotesWorks(notes)
    })
  }

  render(){
  return (
    <div className="App">
      <Switch>
      <Route path="/notes" component={Note} />
      <Route path="/users" component={User} />
      <Route path="/login" component={Login} />
      </Switch>
    </div>
  ); 
}
}
  const mapDispatchToProps = {
    fetchNotesWorks: fetchNotesWorks
  }

export default connect(null, mapDispatchToProps)(App);
