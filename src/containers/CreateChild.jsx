import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FieldArray, Field, reduxForm } from 'redux-form';
// import validate from './validate';
import { renderChildren } from './registration/form';
import { fetchGroups } from '../actions'

class CreateChild extends Component {

  componentWillMount() {
    this.props.fetchGroups();
  }

  renderGroupAssignment() {
    let group = [];
    if(this.props.groups.length) {
      group = this.props.groups.map((group) => {
        return <option value={group.id}>{group.name}</option>
      })
    return group;
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className='primary-form'>

        <FieldArray name="groups" component={renderChildren} />

        <Field name='owner' component='select'>
          <option />
          {this.renderGroupAssignment}
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
  connect(null, { fetchGroups })(CreateChild)
)
