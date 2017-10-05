import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, FieldArray, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { updateReport, loadReport } from '../actions';

import {
  renderMeal, renderDiaper,
  renderNaps, renderItemsNeeded,
  validate } from './report';

// Styles
const Fieldset = styled.fieldset`
  border: 1px solid black;
`;

const data = {
  diapers: [{time: "0800", type: "wet"}, {time: "1015", type: "dry"}],
  itemsNeeded: {wipes: true},
  meals: [{type: "breakfast", food: "Bacon, Eggs, Toast", amount: "most"},{type: "lunch", food: "Sandwich", amount: "all"}],
  naps: [{napStart: "1130", napEnd: "1230"}],
  note: 'Billy had a really great day!'
};

class DailyReport extends Component {

  componentWillMount() {
    console.log('component will mount');
    const { loadReport, initialize, initialValues } = this.props;
    loadReport(data);
  }

  // componentDidMount() {
  //   this.props.initialize(data);
  // }

  onSubmit(values) {
    this.props.updateReport(values, () => {
      this.props.history.push('/dashboard')
    });
  }

  render() {
    const { handleSubmit, loadReport, pristine,
      submitting, initialValues, initialize } = this.props;

    return (
      // handleSubmit is a redux-form handler
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>{this.props.name}'s Daily Report'</h1>
        <Link to="/dashboard">Back</Link>

        <button type="button" onClick={() => initialize(initialValues)}>
          Load
        </button>

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
        <button type="submit">Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  console.log('Report state is:', state.report);
  return {
    initialValues: state.report
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadReport: data => {
      dispatch(loadReport(data));
    }
  }
}

export default reduxForm({
  validate,
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'dailyReport',
  enableReinitialize: true
})(
  connect(mapStateToProps, mapDispatchToProps)(DailyReport)
);
