import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

// Redux Actions:
import { emailChanged, passwordChanged } from '../actions'

// Imported Styles:

// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________




// ________________________________________________

 class Login extends Component {

   handleEmailChange(email) {
     this.props.emailChanged(email)
   }

   handlePasswordChange(password) {
     this.props.passwordChanged(password)
   }



  render() {
    return (
      <div className='container'>
        <h1>Login Page</h1>
        <form>
          <label>Email</label>
          <input onChange={this.handleEmailChange.bind(this)} type='email' name='email' placeholder='Email'/>
          <label>Password</label>
          <input onChange={this.handlePasswordChange.bind(this)} type='password' name='password' placeholder='password'/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(Login)
