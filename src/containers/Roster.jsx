import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components
import Child from './Child'

// Redux Actions
import { fetchRoster } from '../actions'

const Div = styled.div`
  background: pink;
  width: 80%;
  margin: auto;
`
const H1 = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  margin: 20px 0;
`

class Roster extends Component {
  componentWillMount(){
    this.props.fetchRoster()
  }

  render(){
    let children = this.props.roster.map((child, index) => {
      return (
        <Child key={index} child={child} />
      )
    })
    return (
      <Div>
        <H1>Roster</H1>
        {children}
      </Div>
    )
  }

}

const mapStateToProps = state => {
  return {roster: state.rosterList.roster}
}
export default connect(mapStateToProps, { fetchRoster })(Roster)
