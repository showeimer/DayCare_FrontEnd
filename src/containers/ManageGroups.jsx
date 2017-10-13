import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

// Import Router
import { Link } from 'react-router-dom';

// Components
import CreateGroup from './CreateGroup';
import DeleteGroup from './DeleteGroup';

// Redux Actions:
import { fetchGroups, groupPopup, deleteGroup } from '../actions'

// Imported Styles:
import '../styles/global.css'

// Imported Images:
import add from '../styles/images/add.png'
import exit from '../styles/images/exit.png'
import dele from '../styles/images/dele.png'
import pencil from '../styles/images/pencil.png'



const Li = styled.li`
  display: flex;
  background: #FFF;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #000;
  font-size: 22px;
  height: 50px;
  border-radius: 20px;
  margin-top: 20px;
  h1{
    margin-left: 20px;
    font-size: 20px;
    padding-right: 50px;
  }
`

const Edit = styled.span`
  display: inline-block;
  height: 30px;
  width: 30px;
  background: url(${pencil}) no-repeat;
  background-size: fill;
  background-position: center
`
const Delete = styled.span`
  display: inline-block;
  height: 30px;
  width: 30px;
  background: url(${dele}) no-repeat;
  background-size: fill;
  background-position: center;
  margin: 0 10px;
  cursor: pointer;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 20px;
  filter: blur(3px);
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  height; 100%;
  position: relative;
`
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  z-index: 2;
  display: none;
  height: 100vh;
`
// BLOOOOCKCKKCKCKCK ^^^^
const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`
const Add = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  color: #fff;
  div{
    background: url(${add}) no-repeat;
    background-size: 35px 35px;
    background-position: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }
`
const CreateGroupPop = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: white;
  width: 80%;
  padding-bottom: 20px;
  z-index: 5;
  border-radius: 20px;

`
const Header = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 63px;
  span{
    height: 20px;
    width: 20px;
    position: relative;
    float: right;
    bottom: 51px;
    right: 12px;
    background: url(${exit}) no-repeat;
    background-size: 20px 20px;
    cursor: pointer;
  }
  h1{
    color: #000;
    font-size: 22px;
    padding: 20px 0;
    text-align: center
  }
`

class ManageGroups extends Component {
  constructor(props){
    super(props)

    this.state = {
      popup: undefined,
      header: undefined
    }

    this.handlePopup = this.handlePopup.bind(this)
    this.handlePopup = this.handlePopup.bind(this)
  }



  handlePopup(e) {

    console.log(e.target.id);

    if (e.target.id !== 'add') {
      this.setState({
        popup: <DeleteGroup id={e.target.id} popup = {this.props.groupPopup}/>,
        header: 'Delete Group?'
      })
    }
    else {
      this.setState({
        popup: <CreateGroup popup = {this.props.groupPopup}/>,
        header: 'Create Group'
      })
    }
    this.props.groupPopup()
  }

  componentWillMount(){
    this.props.fetchGroups();
  }




  render() {
    let content = this.state.popup
    let header = this.state.header
    let group = this.props.groups.map((group, index) => {
      return (
          <Li key={index}>
            <h1>{group.name}</h1>
            <div>
              <Edit></Edit>
              <Delete onClick={this.handlePopup} id={group.id}></Delete>

            </div>
          </Li>
      )
    })

    return (

      <Div>

        <Overlay style={{'display': `${this.props.styling.display}`}}>
        </Overlay>
        <CreateGroupPop style={{'display': `${this.props.styling.flex}`}}>
          <Header>
            <h1>{header}</h1>
            <span onClick={this.props.groupPopup}></span>
          </Header>
          {content}
        </CreateGroupPop>
        <Ul style={{'filter': `${this.props.styling.filter}`}}>
          <H1>Manage Groups</H1>
          <Add>
            <div onClick={this.handlePopup} id={'add'}></div>
          </Add>
          {group}
        </Ul>
      </Div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groupList.groups,
    styling: state.groupList.styling
  }
}
export default connect(mapStateToProps, { fetchGroups, groupPopup, deleteGroup })(ManageGroups);
