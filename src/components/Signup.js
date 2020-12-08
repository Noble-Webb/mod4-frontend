import React, { Component } from 'react';
import { connect } from "react-redux";
import { signupSuccess } from '../actions/signup'

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			profile_pic: '',
		};
	}

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
          [name]: value
        });
    }

    handleAvatarChange = (e) => {
      this.setState({
        profile_pic: e.target.files[0],
      });
    }

    // handleImageUpload = (imageFile) => {
    //   const formData = new FormData();
    //   formData.append('file', imageFile);
    //   formData.append('upload_preset', 'avatar');
    //   const response = axios({
    //     url: 'your cloudinary api url',
    //     method: 'POST',
    //     data: formData,
    //   });
    //   return response.data.secure_url;
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      
      // let {profile_pic} = this.props
      
      // const imgPath =  this.handleImageUpload(profile_pic)
      
      // profile_pic = imgPath

      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body:  JSON.stringify(this.state)
      }
  
      fetch('http://localhost:3001/users', reqObj)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
          if (data.error) {
              this.setState({
                error: data.error
              })
          }else {
              this.props.signupSuccess(data)
              this.props.history.push('/login')
            }
      })
    }
    
    

render() {
  return (
    <body className='singup'>
      {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
	  <form onSubmit={this.handleSubmit}>
		  <h1>Are you looking to become a member?</h1>
            <input
                onChange={this.handleChange}
                type="text"
                name="username"
                placeholder="Username"
                required
            />
            <br/>

            <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required
            />
            <br/>
			
            <input
                onChange={this.handleAvatarChange}
                type="file"
                accept="/images/*"
            />      
            <button type="submit">
            Create Account
            </button>
        </form>
        </body>
		);
	}
}

const mapDispatchToProps = {
    signupSuccess: signupSuccess
  }

export default connect(null, mapDispatchToProps)(Signup);
