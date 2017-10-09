import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { renderField } from './report'
import { registerDaycare } from '../actions';

class RegistrationPage extends Component {

  onSubmit(values) {
    this.props.registerDaycare(values);
    this.props.history.push('/');
  }

  render() {

    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='primary-form'>
          <label>What is the name of your daycare?</label>
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
        </form>
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
