import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components
import Group from './Group'

// Redux Actions:
import { fetchGroups } from '../actions'


const H1 = styled.h1`
  color: white;
  font-size: 38px;
  margin-bottom: 20px;
`
const GroupsContainer = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

`

class Dashboard extends Component {

  componentWillMount(){
    this.props.fetchGroups();

  }

  renderGroups() {
    let group = [];
    if(this.props.groups.length) {
      group = this.props.groups.map((group) => {
        return <Group key={group.id} name={group.name} id={group.id}/>
      })
    return group;
    }
  }

  render() {

    let group = () => this.props.groups.length > 0 ? this.props.groups[0].owner.name : null

    return (
      <GroupsContainer>
        <H1>{group()}</H1>
        {this.renderGroups()}
      </GroupsContainer>
    );
  }


}

const mapStateToProps = state => {
  return {
    login: state.login,
    groups: state.groupList.groups
  }
}
export default connect(mapStateToProps, { fetchGroups })(Dashboard);
