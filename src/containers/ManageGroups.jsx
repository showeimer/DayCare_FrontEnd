import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components

// Redux Actions:
import { fetchGroups } from '../actions'


const Li = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #fff;
  font-size: 18px;
  h1{
    font-size: 20px;
    padding-right: 50px;
  }
  span{
    background: #fff;
    padding: 5px;
    color: #000;
    cursor: pointer;
    margin: 0 10px;
  }
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 300px;
  margin-top: 20px;
`
const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const H1 = styled.h1`
  color: #fff;
  font-size: 22px;
  margin: 30px 0;
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
          <div>
            <span>Edit</span>
            <span>Delete</span>
          </div>
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
