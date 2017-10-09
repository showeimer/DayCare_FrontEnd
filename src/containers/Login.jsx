import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { renderField } from './report';
import { login } from '../actions';

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

   onSubmit(values) {
     this.props.login(values);
     this.props.history.push('/dashboard');
   }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <Div className='container'>
        <H1>inForm.</H1>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="email"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="password"
          />
          <button type="submit" className='primary-button'>Login</button>
          <Link to='/register'><button className="secondary-button">Register</button></Link>
        </Form>
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
