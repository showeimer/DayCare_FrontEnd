import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { updateReport } from '../actions';

import {
  renderMeal, renderDiaper,
  renderNaps, renderItemsNeeded,
  validate } from './report';

// Styles
const Fieldset = styled.fieldset`
  border: 1px solid black;
`;

class DailyReport extends Component {

  onSubmit(values) {
    this.props.updateReport(values, () => {
      this.props.history.push('/dashboard')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      // handleSubmit is a redux-form handler
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>{this.props.name}'s Daily Report'</h1>
        <Link to="/dashboard">Back</Link>

        <Fieldset>
          <legend>Meals</legend>
          <FieldArray name="meals" component={renderMeal} />
        </Fieldset>

        <Fieldset>
          <legend>Diapers</legend>
          <FieldArray name="diapers" component={renderDiaper} />
        </Fieldset>

        <Fieldset>
          <legend>Naps</legend>
          <FieldArray name="naps" component={renderNaps} />
        </Fieldset>

        <Fieldset>
          <legend>Items I Need</legend>
          <FieldArray name="itemsNeeded" component={renderItemsNeeded} />
        </Fieldset>

        <Fieldset>
          <legend>Notes For Parents</legend>
          <Field
            name="note"
            component="textarea"
            type="textarea"
          />
        </Fieldset>
        <button>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  validate,
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'dailyReport'
})(
  connect(null, { updateReport })(DailyReport)
);
