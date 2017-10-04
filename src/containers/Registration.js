import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerDaycare } from '../actions';
import RegistrationForm from './registration/RegistrationForm';

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
      <RegistrationForm onSubmit={this.onSubmit} />
    );
  }
}

export default connect(null, { registerDaycare })(Registration);
