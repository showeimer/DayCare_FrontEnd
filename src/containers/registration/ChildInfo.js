import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';

import { renderChildren } from './form';

const ChildInfo = props => {

  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <FieldArray name="children" component={renderChildren} />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'registration', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  // validate
})(ChildInfo)
