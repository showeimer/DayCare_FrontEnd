import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'

// Redux Actions:
import { emailChanged, passwordChanged, login } from '../actions'

// Imported Styles:
import '../styles/global.css'
// Imported Images:

// Import Router
import { Link } from 'react-router-dom';

// STYLES:
// ________________________________________________
const Div = styled.div`
  height: 100vh;
  background: #562C40;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Form = styled.form`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input{
    outline: none;
    height: 50px;
    width: 270px;
    text-align: center;
    border: 0;
    border-radius: 10px;
  }
  a{
    width: 100%;
  }
`
const H1 = styled.h1`
  color: #fff;
  margin: 130px 0px;
  font-size: 50px;
  font-family: 'Lobster Two', cursive;
  &:after ${H1}{
    content: "";
    display: block;
    width: 48px;
    border: solid 2px #50E3C2;
    margin: auto;
  }
`




// ________________________________________________

 class Login extends Component {

   handleEmailChange(email) {
     this.props.emailChanged(email)
   }

   handlePasswordChange(password) {
     this.props.passwordChanged(password)
   }

   handleLoginSubmit() {
     this.props.login();
   }
  render() {
    return (
      <Div className='container'>
        <H1>inForm.</H1>
        <Form onSubmit={this.handleLoginSubmit.bind(this)}>
          <input onChange={this.handleEmailChange.bind(this)} type='email' name='email' placeholder='email'/>
          <input onChange={this.handlePasswordChange.bind(this)} type='password' name='password' placeholder='password'/>
          <Link to='/dashboard'><button className='primary-button'>Login</button></Link>
          <Link to='/registration'><button className='secondary-button'>Register</button></Link>

        </Form>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, login})(Login)
