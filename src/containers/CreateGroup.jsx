import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import styled from 'styled-components'
import { renderField } from './report';
import { createGroup } from '../actions/groupActions';

// Import Router
import { Link } from 'react-router-dom';


const Form = styled.form`
  height: 100%;
  background: #fff;
  input{
    font-size: 16px;
    border: 1px solid #50E3C2;
  }
  button{
    font-size: 16px;
    height: 35px;
    width: 90px;
    margin-top: 10px;
    cursor: pointer;
  }
`

class CreateGroup extends Component {

  componentWillMount(){
      console.log(this.props);
  }

  onSubmit(values) {
    console.log('function is', this.props.refresh);
    this.props.createGroup(values, this.props.daycareId);
    this.props.popup()
  }

  render() {
    const { handleSubmit, daycareId, defaultValue } = this.props

    return (

      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='primary-form' >

        <Field
          name='name'
          type="text"
          component={renderField}
          label="Group Name"
        />
        <Field
          name='teachers'
          type="text"
          component={renderField}
          label="Teacher's Name"
        />

      <button type="submit" className="primary-button">Submit</button>

      </Form>
    )
  }
}

const mapStateToProps = state => {
  console.log('sfasdf', state.login.account.id)
  return {
    daycareId: state.login.account.id,
  }
}

export default reduxForm({
  form: 'createGroup', //Form name is same
  // validate
})(
  connect(mapStateToProps, { createGroup })(CreateGroup)
)
