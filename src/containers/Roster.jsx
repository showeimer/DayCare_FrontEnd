import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// Components
import Child from './Child'
import DeleteChild from './DeleteChild'

// Redux Actions
import { fetchRoster, deleteChild, groupPopup } from '../actions'

// Imported Styles:
import '../styles/global.css'

// Imported Images:
import add from '../styles/images/add.png'
import exit from '../styles/images/exit.png'
import dele from '../styles/images/dele.png'
import pencil from '../styles/images/pencil.png'

const Div = styled.div`
  margin: auto;
  width: 82%;
  display: flex;
  align-items: center;
  background: pink;
`
const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin: 20px 0;
`
const Add = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  color: #fff;
  margin-bottom: 20px;
  div{
    background: url(${add}) no-repeat;
    background-size: 35px 35px;
    background-position: center;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }
`

const Edit = styled(Link)`
  height: 30px;
  width: 30px;
  background: url(${pencil}) no-repeat;
  background-position: center;
  cursor: pointer;
`
const Delete = styled.span`
  height: 30px;
  width: 30px;
  background: url(${dele}) no-repeat;
  background-position: center;
  margin: 10px;
  cursor: pointer;
`

const Ul = styled.ul`
  width: 100%;
  margin: auto;
  filter: blur(3px);
  background: blue;
`


// POPUP STYLING
// _______________________________
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
const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  z-index: 2;
  display: none;
  height: 100vh;
`


class Roster extends Component {
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
        popup: <DeleteChild id={e.target.id} popup = {this.props.groupPopup}/>,
        header: 'Delete Child?'
      })
    }

    this.props.groupPopup()
  }

  componentWillMount(){
    this.props.fetchRoster()
  }

  renderRoster() {
    let roster = [];
    if(this.props.roster.length) {
      roster = this.props.roster.map((child, index) => {
        return (
          <Child key={index} child={child}>
            <Edit to={`/manage/children/edit/${child.id}`} />
            <Delete onClick={this.handlePopup} id={child.id} />
          </Child>
        )
      })
    return roster;
    }
  }

  render(){
    let content = this.state.popup
    let header = this.state.header
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
          <H1>Roster</H1>
          <Add>
            <Link to="/manage/children/create"><div></div></Link>
          </Add>
          {this.renderRoster()}
        </Ul>
      </Div>
    )
  }

}

const mapStateToProps = state => {
  return {
    roster: state.rosterList.roster,
    groups: state.groupList.groups,
    styling: state.groupList.styling
  }
}
export default connect(mapStateToProps, { fetchRoster, deleteChild, groupPopup })(Roster)
