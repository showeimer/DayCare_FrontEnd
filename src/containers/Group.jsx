import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const H1 = styled.h1`
  color: #000;
  text-decoration: none;
`




class Group extends Component {

  render() {
    return (
      <Link className="group-container" to={`/dashboard/${this.props.name}`}>
      <h1>{this.props.name}</h1>
      </Link>
    );
  }
}

export default Group;
