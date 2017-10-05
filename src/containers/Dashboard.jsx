import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components
import Group from './Group'

// Redux Actions:
import { fetchGroups } from '../actions'


const H1 = styled.h1`
  color: white;
  font-size: 50px;
`
const GroupsContainer = styled.div`
  display: flex
`

class Dashboard extends Component {

  componentWillMount(){
    console.log('mounted!');
    this.props.fetchGroups()
  }


  render() {
    let group = this.props.groups.map((group) => {
      return (
        <Group key={group.name} name={group.name}/>
      )
    })
    return (
      <GroupsContainer>
        <H1>Groups</H1>
        {group}
      </GroupsContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log("what is this?", state.groups);
  return {groups: state.groups}
}
export default connect(mapStateToProps, { fetchGroups })(Dashboard);
