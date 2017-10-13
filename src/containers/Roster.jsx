import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// Components
import Child from './Child'
import DeleteChild from './DeleteChild'

// Redux Actions
import { fetchRoster, deleteChild } from '../actions'

// Imported Styles:
import '../styles/global.css'

// Imported Images:
import add from '../styles/images/add.png'
import pencil from '../styles/images/pencil.png'
import dele from '../styles/images/dele.png'

const Div = styled.div`
  width: 82%;
  margin: auto;
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
        header: 'Delete Group?'
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
        return <Child key={index} child={child}><Edit to={`/manage/children/edit/${child.id}`} />
        <Delete onClick={this.handlePopup} id={child.id} /></Child>
      })
    return roster;
    }
  }

  render(){

    return (
      <Div>
        <H1>Roster</H1>
        <Add>
          <Link to="/manage/children/create"><div></div></Link>
        </Add>
        {this.renderRoster()}
      </Div>
    )
  }

}

const mapStateToProps = state => {
  return {roster: state.rosterList.roster}
}
export default connect(mapStateToProps, { fetchRoster, deleteChild })(Roster)
