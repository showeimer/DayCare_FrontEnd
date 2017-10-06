import React, { Component } from 'react';
import { FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderChildren } from './registration/form';

class CreateChild extends Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className='primary-form'>

        <FieldArray name="groups" component={renderChildren} />
        <button type="submit">Submit</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'createChild', //Form name is same
  // validate
})(CreateChild)
