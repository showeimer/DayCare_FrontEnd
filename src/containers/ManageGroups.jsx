import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components

// Redux Actions:
import { fetchGroups } from '../actions'


const Li = styled.li`
  display: flex;
  flex-direction: row;
  color: #fff;
  font-size: 20px;
  h1{
    font-size: 20px;
    padding-right: 50px;
  }
  button{
    margin: 0px 10px;
  }
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 200px;
  width: 300px;
`
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H1 = styled.h1`
  color: #fff;
  font-size: 50px;
  padding: 30px 0px;
`

class ManageGroups extends Component {

  componentWillMount(){
    this.props.fetchGroups()
  }


  render() {

    let group = this.props.groups.map((group) => {
      return (
        <Li>
          <h1>{group.name}</h1>
          <button>Edit</button>
          <button>Delete</button>
        </Li>
      )
    })
    return (
      <Div>
        <H1>Manage Groups</H1>
        <Ul>
          {group}
        </Ul>
      </Div>
    );
  }


}

const mapStateToProps = state => {
  return {groups: state.groupList.groups}
}
export default connect(mapStateToProps, { fetchGroups })(ManageGroups);
