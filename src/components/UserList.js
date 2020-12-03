import React from 'react'
import User from './User'
import { connect } from 'react-redux';
import { removeUser, editUser } from "../actions/users";



class UserList extends React.Component {
  
  render(){
    const {user, removeUser, editUser} = this.props
    
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>User</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {user.map(user => <User key={user.id} editUser={editUser} removeUser={removeUser} user={user} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

export default connect(mapStateToProps, { removeUser, editUser })(UserList);