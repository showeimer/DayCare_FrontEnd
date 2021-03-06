import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { deleteGroup, fetchGroups } from '../actions';

// Import Router
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    color: #000;
    background: #50E3C2;
    padding: 10px 20px;
    margin-right: 30px;
  }
`
const No = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FF8987;
  padding: 10px 20px;
  cursor: pointer;
`


class DeleteGroup extends Component {
  constructor(props){
    super(props)

    this.handleRemoveGroup = this.handleRemoveGroup.bind(this)
  }


  componentWillMount(){
      console.log(this.props);
  }

  handleRemoveGroup(){
    console.log(this.props.deleteGroup);
    this.props.deleteGroup(this.props.id)
    this.props.popup()
    // this.props.history.push('/manage/groups')
  }

  render() {
    return (
      <Div>
        <Link onClick={this.handleRemoveGroup} to='/manage/groups'>
          Yes
        </Link>
        <No className='primary-button' onClick={this.props.popup}>No</No>
      </Div>
    )
  }
}

const mapStateToProps = state => {
  return {
    daycareId: state.login.account.id,
  }
}

export default connect(mapStateToProps, { deleteGroup, fetchGroups })(DeleteGroup)
