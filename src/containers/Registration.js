import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerDaycare } from '../actions';
import RegistrationForm from './registration/RegistrationForm';
import styled from 'styled-components';

// Style
// ____________________________________________
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: #fff;
  h1{
    color: #000;
    font-size: 50px;
  }
`


class Registration extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.registerDaycare(values, () => {
      this.props.history.push('/')
    });
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Register</h1>
        </Header>
        <RegistrationForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { registerDaycare })(Registration);
