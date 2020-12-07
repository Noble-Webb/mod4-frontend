import React from 'react'
import { Switch, Route } from "react-router-dom";
import UserList from './UserList'

class Users extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(users => {
      console.log(users)
      this.setState({
        users: users
      })
    })
  }

  render() { 
    return ( 
        <Switch>
        <Route render={() => {
          return <UserList notes={this.state.users}/>
        }} path='/users' />
      </Switch> 
     );
}
}

export default Users;