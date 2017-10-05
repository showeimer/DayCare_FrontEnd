import React from 'react';
import { FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderGroups } from './form';

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error
//     ? <span>
//         {error}
//       </span>
//     : false

const GroupInfo = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit} className='primary-form'>

      <FieldArray name="groups" component={renderGroups} />

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
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
})(GroupInfo)
