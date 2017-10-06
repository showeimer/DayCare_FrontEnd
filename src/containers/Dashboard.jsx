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
  padding-top: 40px;
  display: flex;
  height: 300px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

`

class Dashboard extends Component {

  componentWillMount(){
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
  return {groups: state.groupList.groups}
}
export default connect(mapStateToProps, { fetchGroups })(Dashboard);
