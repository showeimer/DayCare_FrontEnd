import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
// import validate from './validate';
import styled from 'styled-components'
import { renderField } from './report';

const Form = styled.form`
  height: 100%;
  background: #fff;
  input{
    font-size: 16px;

  }
  button{
    font-size: 16px;
    height: 35px;
    width: 90px;
    margin-top: 10px;
  }
`

class CreateGroup extends Component {

  render() {
    const { handleSubmit } = this.props

    return (

      <Form onSubmit={handleSubmit, this.props.popup} className='primary-form' >

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

      <button type="submit" className="primary-button">Submit</button>

      </Form>
    )
  }
}

export default reduxForm({
  form: 'createGroup', //Form name is same
  // validate
})(CreateGroup)
