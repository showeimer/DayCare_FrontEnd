import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Components

// Redux Actions
import { fetchRoster } from '../actions'

class Roster extends Component {
  componentWillMount(){
    this.props.fetchRoster()
  }

  render(){
    let child = this.props.roster.map((child) => {
      return (
        <li key={child.firstname}>{child.firstname} {child.lastname}</li>
      )
    })
    return (
      <ul>
        {child}
      </ul>
    )
  }

}

const mapStateToProps = state => {
  return {roster: state.rosterList.roster}
}
export default connect(mapStateToProps, { fetchRoster })(Roster)
