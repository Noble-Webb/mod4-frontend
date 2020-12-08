import React from 'react';
import { logoutUser } from "../actions/auth";
import { connect } from "react-redux";
import { NavLink} from 'react-router-dom'


class Navbar extends React.Component {

  handleLogout = () => {
    localStorage.clear()
    // debugger
    this.props.logoutUser()
  }

  render() {
    return (
      <div className={`ui inverted green menu`}>
        <NavLink className="ui header" to='/'>
          <i className={`${this.props.icon} icon`} />
          <div className="content">{this.props.title}</div>
          <div className="sub header">{this.props.description}</div>
        </NavLink>
        <div className="right menu">
        {
        localStorage.getItem("my_app_token") ?
        <NavLink to='/login' className="ui button" onClick={this.handleLogout}>
          Logout
        </NavLink>
        :
        <NavLink to='/login' className="ui button">
          Login
        </NavLink>
      }
          <NavLink className="item" to='/notes/new'>
            Add Note 
          </NavLink>
          <NavLink className="item" to='/notes'>
            Notes Page
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    auth: state.auth 
  }
}

export default connect(mapStateToProps, {logoutUser})(Navbar);