import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderField } from './report';
import { fetchGroups } from '../actions'
import { updateChild } from '../actions/rosterActions';
import styled from 'styled-components'

const H1 = styled.h1`
  color: #fff;
  font-size: 30px;
  margin: 40px 0;
`
const Form = styled.form`
  button{
    margin: 20px;
    cursor: pointer;
  }
  h2{
    margin: 15px 0;
  }
  select{
    font-size: 14px;
    border: none;
  }
`

class EditChild extends Component {

  componentWillMount() {
    this.props.fetchGroups();
  }

  renderGroupAssignment() {
    let group = [];
    if(this.props.groups.length) {
      group = this.props.groups.map((group) => {
        return <option value={group.id} key={group.id}>{group.name}</option>
      })
    return group;
    }
  }

  onSubmit(values) {
    console.log(values);
    this.props.updateChild(values);
    this.props.history.push('/roster');
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='primary-form'>
        <H1>Add new child</H1>
        <Field
          name='firstName'
          type="text"
          component={renderField}
          label="First Name"
        />
        <Field
          name='lastName'
          type="text"
          component={renderField}
          label="Last Name"
        />
        <Field
          name='dob'
          type="text"
          component={renderField}
          label="Birthdate (mm/dd/yyyy)"
        />
        <Field
          name='parentFirstName'
          type="text"
          component={renderField}
          label="Parent's First Name"
        />
        <Field
          name='parentLastName'
          type="text"
          component={renderField}
          label="Parent's Last Name"
        />
        <Field
          name='parentEmail'
          type="email"
          component={renderField}
          label="Parent's Email"
        />

        <h2>Group:</h2>
        <Field name='owner.id' component='select'>
          <option />
          {this.renderGroupAssignment()}
        </Field>

        <button type="submit" className='primary-button'>Submit</button>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groupList.groups
  }
}

export default reduxForm({
  form: 'editChild', //Form name is same
  // validate
})(
  connect(mapStateToProps, { fetchGroups, updateChild })(EditChild)
)
