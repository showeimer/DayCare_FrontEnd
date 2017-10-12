import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderField } from './report';
import { fetchGroups } from '../actions'
import { createChild } from '../actions/rosterActions';

class CreateChild extends Component {

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
    this.props.createChild(values);
    this.props.history.push('/roster');
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='primary-form'>

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

        <Field name='owner.id' component='select'>
          <option />
          {this.renderGroupAssignment()}
        </Field>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groupList.groups
  }
}

export default reduxForm({
  form: 'createChild', //Form name is same
  // validate
})(
  connect(mapStateToProps, { fetchGroups, createChild })(CreateChild)
)
