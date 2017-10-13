import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { deleteChild } from '../actions';

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


class DeleteChild extends Component {
  constructor(props){
    super(props)

    this.handleRemoveChild = this.handleRemoveChild.bind(this)
  }


  componentWillMount(){
    console.log(this.props);
  }

  handleRemoveChild(){
    this.props.deleteChild(this.props.id, this.props.history.push('/roster'))
    this.props.popup()
  }

  render() {
    return (
      <Div>
        <Link onClick={this.handleRemoveChild} to='/manage/groups'>
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

export default connect(mapStateToProps, { deleteChild })(DeleteChild)
