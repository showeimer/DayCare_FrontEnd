import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { renderField } from './report'

// Redux Actions:
import { emailChanged, passwordChanged } from '../actions'

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

<<<<<<< HEAD
   onSubmit() {
     this.props.login();
     this.props.history.push('/dashboard');
=======
   handleEmailChange(email) {
     this.props.emailChanged(email)
   }

   handlePasswordChange(password) {
     this.props.passwordChanged(password)
>>>>>>> af806a75586b6621eadde746a7a7cdce6efcdbb2
   }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Div className='container'>
        <H1>inForm.</H1>
<<<<<<< HEAD
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <input type='email' name='email' placeholder='email'/>
          <input type='password' name='password' placeholder='password'/>
          <button type="submit" className='primary-button'>Login</button>
=======
        <Form>
          <input onChange={this.handleEmailChange.bind(this)} type='email' name='email' placeholder='email'/>
          <input onChange={this.handlePasswordChange.bind(this)} type='password' name='password' placeholder='password'/>
          <Link to='/dashboard'><button className='primary-button'>Login</button></Link>
          <Link to='/registration'><button className='secondary-button'>Register</button></Link>
>>>>>>> af806a75586b6621eadde746a7a7cdce6efcdbb2
        </Form>
        <Link to='/registration' className="secondary-button">Register</Link>
      </Div>
    );
  }
}

<<<<<<< HEAD
export default reduxForm({
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'login',
  // enableReinitialize: true
})(
  connect(null, { login })(Login)
);
=======
const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(Login)
>>>>>>> af806a75586b6621eadde746a7a7cdce6efcdbb2
