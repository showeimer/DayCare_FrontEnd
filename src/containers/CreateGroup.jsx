import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderField } from './report';

class CreateGroup extends Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className='primary-form'>

        <Field
          name={`name`}
          type="text"
          component={renderField}
          label="Group Name"
        />
        <Field
          name={`teacher`}
          type="text"
          component={renderField}
          label="Teacher's Name"
        />

        <button type="submit">Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'createGroup', //Form name is same
  // validate
})(CreateGroup)
