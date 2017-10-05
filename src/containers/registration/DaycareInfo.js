import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { validate } from './form';
import { renderField } from '../report';

const DaycareInfo = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>What is the name of your daycare?</label>
      <Field
        name="account.daycare"
        type="text"
        component={renderField}
        label="Name of your daycare"
      />
      <label>Daycare Address:</label>
      <Field
        name="account.address.street"
        type="text"
        component={renderField}
        label="Street"
      />
      <Field
        name="account.address.city"
        type="text"
        component={renderField}
        label="City"
      />
      <Field
        name="account.address.state"
        type="text"
        component={renderField}
        label="State"
      />
      <Field
        name="account.address.zip"
        type="text"
        component={renderField}
        label="Zipcode"
      />

      <label>Daycare Email:</label>
      <Field
        name="account.email"
        type="email"
        component={renderField}
        label="email@daycare.com"
      />

      <label>Password:</label>
      <Field
        name="account.password"
        type="text"
        component={renderField}
        label="password"
      />
      <div>
        <button type="submit" className="next">
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
