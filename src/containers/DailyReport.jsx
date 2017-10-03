import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

class DailyReport extends Component {
  render() {
    return (
      <div>
        <h1>Daily Report Component</h1>
      </div>
    );
  }
}

export default reduxForm({
  form: 'dailyReport'
})(DailyReport);
