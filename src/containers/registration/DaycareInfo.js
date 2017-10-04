import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderField } from '../form';

const DaycareInfo = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className='primary-form'>
      <label>What is the name of your daycare?</label>
      <Field
        name="daycareName"
        type="text"
        component={renderField}
        label="Name of your daycare"
      />
      <label>Daycare Address:</label>
      <Field
        name="address.street"
        type="text"
        component={renderField}
        label="Street"
      />
      <Field
        name="address.city"
        type="text"
        component={renderField}
        label="City"
      />
      <Field
        name="address.state"
        type="text"
        component={renderField}
        label="State"
      />
      <Field
        name="address.zip"
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
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'registration', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  // validate
})(DaycareInfo)
