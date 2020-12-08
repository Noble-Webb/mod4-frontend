import React from 'react';
import { connect } from 'react-redux'
import { currentUser } from '../actions/auth'


class Login extends React.Component {
  state = {
    username: '',
    password: '',
    error: null
  }

  handleInputChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3001/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.currentUser(data)
        this.props.history.push('/notes')
        localStorage.setItem('my_app_token', data.token)
        
      }
    })
  }

  render(){

    return (
      <body className="login">
        {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <input name={'username'} placeholder='Username' onChange={this.handleInputChange} value={this.state.username} />
          <input name={'password'} onChange={this.handleInputChange} placeholder='Password' type="password" value={this.state.password} />
          <input type='submit' value='login' />
        </form>
        <message> <a href='/signup'>"Sign-up!?!?!"</a> </message>
      </body>
    );
  }
}

const mapDispatchToProps = {
  // loginSuccess
  currentUser
}

export default connect(null, mapDispatchToProps)(Login)
