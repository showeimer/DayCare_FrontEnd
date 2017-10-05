import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { renderField } from './report'

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

   onSubmit() {
     this.props.login();
     this.props.history.push('/dashboard');
   }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Div className='container'>
        <H1>inForm.</H1>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <input type='email' name='email' placeholder='email'/>
          <input type='password' name='password' placeholder='password'/>
          <button type="submit" className='primary-button'>Login</button>
        </Form>
        <Link to='/registration' className="secondary-button">Register</Link>
      </Div>
    );
  }
}

export default reduxForm({
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'login',
  // enableReinitialize: true
})(
  connect(null, { login })(Login)
);
