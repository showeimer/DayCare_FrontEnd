import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  color: #000;
  text-decoration: none;
`
const Div = styled.div`
  margin: 20px;
`
class Group extends Component {

  render() {
    return (
      <Div>
        <Link className="group-container" to={`/daycares/groups/${this.props.id}/childen`}>
          <h1>{this.props.name}</h1>
        </Link>
      </Div>
    );
  }
}

export default Group;
