import Navbar from './components/Navbar';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchNotesWorks } from "./actions/notes";
import { currentUser } from "./actions/auth";
import User from "./components/User";
import Notes from "./components/Notes";
import Login from "./components/Login";
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import NoteInput from "./components/NoteInput";


class App extends Component {
  componentDidMount(){
    const token = localStorage.getItem('my_app_token')
    fetch('http://localhost:3001/notes')
      .then(resp => resp.json())
      .then(notes => {
        console.log(notes)
        this.props.fetchNotesWorks(notes)
      })


    if(!token) {
      this.props.history.push('/login')
    } else {

      const reqObj = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      fetch('http://localhost:3001/current_user', reqObj)
      .then(resp => resp.json())
      .then(users =>{
        // console.log(users)
        this.props.currentUser(users)
      })
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="App">
        <Navbar icon="puzzle" title="Quality Content!!" description="Broken Bones Made Stronger" />
        <Switch>
          <Route exact path="/notes" component={Notes} />
          <Route path='/notes/new' component={NoteInput} />
          <Route path="/users" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    ); 
  }
}

const mapDispatchToProps = {
  fetchNotesWorks,
  currentUser
}

const mapStateToProps = (state) =>{
  // user: state.current_user.user.id  
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
