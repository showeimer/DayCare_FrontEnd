import React, { Component } from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
// Redux Actions:
import { fetchGroups } from '../actions'


const H1 = styled.h1`
  color: white;
  font-size: 50px;
`

class Dashboard extends Component {

  componentDidMount(){
    this.props.fetchGroups()
  }

  render() {
    return (
      <div>
        <H1>Dashboard Component</H1>
      </div>
    );
  }
}

export default connect(null, { fetchGroups })(Dashboard);
