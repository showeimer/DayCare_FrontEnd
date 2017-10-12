import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


// Components
import Child from './Child'

// Redux Actions
import { fetchRoster } from '../actions'

// Imported Styles:
import '../styles/global.css'

// Imported Images:
import add from '../styles/images/add.png'



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

class Roster extends Component {
  componentWillMount(){
    this.props.fetchRoster()
  }

  renderRoster() {
    let roster = [];
    if(this.props.roster.length) {
      roster = this.props.roster.map((child, index) => {
        return <Child key={index} child={child} />
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
export default connect(mapStateToProps, { fetchRoster })(Roster)
