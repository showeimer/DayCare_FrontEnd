import React, { Component } from 'react';
import { FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderGroups } from './registration/form';

class CreateGroup extends Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className='primary-form'>

        <FieldArray name="groups" component={renderGroups} />
        <button type="submit">Create Group</button>

      </form>
    )
  }
}

export default reduxForm({
  form: 'createGroup', //Form name is same
  // validate
})(CreateGroup)
