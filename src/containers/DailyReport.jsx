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
const Form = styled.form`
  width: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  h1{
    text-align: center;
    color: #fff;
    font-size: 22px;
    margin: 20px 0;
  }
  a{
    color: #fff;
    background: #FF8987;
    padding: 10px 15px;
    border-radius: 10px;
    width: 10%;
    text-align: center;
    margin: auto;
    cursor: pointer;
  }
  textarea{
    width: 100%;
    border-radius: 10px;
  }
`

const Fieldset = styled.div`
  margin: 20px 0;
  width: 90%;
  legend{
    color: #fff;
    font-size: 22px;
    margin-bottom: 30px;
  }
`

const Legend = styled.h5`
  color: #fff;
  font-size: 26px;
  margin-bottom: 30px;
`
const Button = styled.button`
  width: 80%;
  margin-bottom: 50px;
`

class DailyReport extends Component {

  componentDidMount() {
    const { loadReport, initialize, initialValues } = this.props;

    if(!initialValues.loaded) {
      console.log('component will mount');
      loadReport(initialize);
    }
  }

  onSubmit(values) {
    this.props.updateReport(values, this.props.initialValues.id);
    this.props.history.push('/dashboard')
  }

  render() {

    console.log('rendered', this.props);

    const { handleSubmit, loadReport } = this.props;

    return (
      // handleSubmit is a redux-form handler
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>Ashley's Daily Report</h1>
        <Link to="/dashboard">Back</Link>

        <Fieldset>
          <FieldArray name="meals" component={renderMeal} />
        </Fieldset>

        <Fieldset>
          <FieldArray name="diapers" component={renderDiaper} />
        </Fieldset>

        <Fieldset>
          <FieldArray name="naps" component={renderNaps} />
        </Fieldset>

        <Fieldset>
          <Legend>Items I Need</Legend>
          <FieldArray name="itemsNeeded" component={renderItemsNeeded} />
        </Fieldset>

        <Fieldset>
          <Legend>Notes For Parents</Legend>
          <Field
            name="note"
            component="textarea"
            type="textarea"
          />
        </Fieldset>
        <Button type="submit" className="primary-button">Save</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  console.log('Report state is:', state.report);
  return {
    initialValues: state.report,
    children: state.groupList.children
  }
}

export default reduxForm({
  validate,
  // name of this form is dailyReport, this is how redux differentiates various forms on an app
  form: 'dailyReport',
  // enableReinitialize: true
})(
  connect(mapStateToProps, { loadReport, updateReport })(DailyReport)
);
