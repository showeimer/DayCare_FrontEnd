import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { renderField } from './report'
import { registerDaycare } from '../actions';
import styled from 'styled-components'

const H2 = styled.h2`
  color: #fff;
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
`
const H1 = styled.h1`
margin-top: 20px;
color: #fff;
text-align: center;
font-size: 40px;
font-family: 'Lobster Two', cursive;
&:after ${H1}{
  content: "";
  display: block;
  width: 38px;
  border: solid 2px #50E3C2;
  margin: auto;
}
`
const Form = styled.form`
  font-size: 18px;
`

class RegistrationPage extends Component {

  onSubmit(values) {
    this.props.registerDaycare(values);
    this.props.history.push('/');
  }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div className='container'>
        <H1>inForm.</H1>
        <H2>Register your Daycare</H2>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='primary-form'>
          <label>Daycare Name</label>
          <Field
            name="name"
            type="text"
            component={renderField}
            label="Name of your daycare"
          />
          <label>Daycare Address:</label>
          <Field
            name="address"
            type="text"
            component={renderField}
            label="Street"
          />
          <Field
            name="city"
            type="text"
            component={renderField}
            label="City"
          />
          <Field
            name="state"
            type="text"
            component={renderField}
            label="State"
          />
          <Field
            name="zipcode"
            type="text"
            component={renderField}
            label="Zipcode"
          />

          <label>Daycare Email:</label>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="email@daycare.com"
          />

          <label>Password:</label>
          <Field
            name="password"
            type="text"
            component={renderField}
            label="password"
          />
          <div>
            <button type="submit" className="next primary-button">
              Register
            </button>
          </div>
        </Form>
      </div>
    )
  }
}

export default reduxForm({
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'registration',
  // enableReinitialize: true
})(
  connect(null, { registerDaycare })(RegistrationPage)
);
