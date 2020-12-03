import React from 'react'
import { Switch, Route } from "react-router-dom";
import UserList from './UserList'
import UserInput from './UserInput'
import EditUserForm from './EditUserForm'

class Users extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(users => {
      this.setState({
        users: users
      })
    })
  }

  render() { 
    return ( 
        <Switch>
        <Route component={UserInput} path='/users/new' />
        <Route render={() => {
          return <UserList notes={this.state.users} />
        }} path='/users' />
      </Switch> 
     );
}
}

export default Users;