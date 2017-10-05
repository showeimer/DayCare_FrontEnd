import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DaycareInfo from './DaycareInfo';
import GroupInfo from './GroupInfo';
import ChildInfo from './ChildInfo';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 &&
          <DaycareInfo
            onSubmit={this.nextPage}
          />}

        {page === 2 &&
          <GroupInfo
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}

        {page === 3 &&
          <ChildInfo
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    )
  }
}

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default RegistrationForm;