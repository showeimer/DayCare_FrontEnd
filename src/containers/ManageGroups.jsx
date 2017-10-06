import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components

// Redux Actions:
import { fetchGroups } from '../actions'


class ManageGroups extends Component {

  componentWillMount(){
    this.props.fetchGroups()
  }


  render() {

    let group = this.props.groups.map((group) => {
      return (
        <li>
          <h1>{group.name}</h1>
          <button>Edit</button>
          <button>Delete</button>
        </li>
      )
    })
    return (
      <div>
        <h1>Manage Groups</h1>
        <ul>
          {group}
        </ul>
      </div>
    );
  }


}

const mapStateToProps = state => {
  return {groups: state.groupList.groups}
}
export default connect(mapStateToProps, { fetchGroups })(ManageGroups);
