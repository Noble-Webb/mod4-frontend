import Navbar from './Navbar';
import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom'
import User from "./User";
import Note from "./Note";
import Login from "./Login";
import { BrowserRouter as Route, Router } from "react-router-dom";
// import './App.css';

class App extends  Component {
  render(){
    return (
     <Router>
       <Route path="/notes" component={Note} />
       <Route path="/users" component={User} />
       {/* <Route path="/login" component={Login} /> */}
     </Router>
    );
  }
}

export default App;
// class App extends  Component {
//   render(){
//     return (
//       <div className="App">
//         {/* <Navbar icon="paint brush" title="Painterest" description="out app" /> */}
//       <Switch>
//         {/* <Route component={About} path='/about' />
//         <Route component={Dashboard} path='/dashboard/:username/' /> */} 
//         {/* <Route component={Login} path='/login' /> */}
//         <Route component={Notes} path='/notes'  />
//         <Route component={Users} path='/user' />
//       </Switch>
//       </div>
//     );
//   }
// }

// export default App;
