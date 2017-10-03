import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { updateReport } from '../actions';

// Styles
const Fieldset = styled.fieldset`
  border: 1px solid black;
`;

const Event = styled.div`
  display: flex;
  flex-direction: row;
`;

class DailyReport extends Component {

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span> {error} </span>}
        </div>
      </div>
    );
  };

  renderMeal = ({fields, meta: { error } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>Add Meal</button>
        </li>

        {fields.map((meal, index) => {
          return (
            <Event key={index}>
              <button type="button" title="Remove Meal" onClick={() => fields.remove(index)}>X</button>

              <label>
                <Field name={`${meal}.type`} component="select">
                  <option />
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  <option value="bottle">Bottle</option>
                </Field>
              </label>

              <Field
                name={`${meal}.food`}
                type="text"
                component={this.renderField}
                label="Food"
              />

              <label>
                <Field
                  name={`${meal}.amount`}
                  component={this.renderField}
                  type="radio"
                  value="all"
                />
                All
              </label>
              <label>
                <Field
                  name={`${meal}.amount`}
                  component={this.renderField}
                  type="radio"
                  value="most"
                />
                Most
              </label>
              <label>
                <Field
                  name={`${meal}.amount`}
                  component={this.renderField}
                  type="radio"
                  value="some"
                />
                Some
              </label>
              <label>
                <Field
                  name={`${meal}.amount`}
                  component={this.renderField}
                  type="radio"
                  value="none"
                />
                None
              </label>
            </Event>
          )
        })}
      </ul>
    )
  }

  renderDiaper = ({fields, meta: { error } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>Add Diaper Change</button>
        </li>

        {fields.map((diaper, index) => {
          return (
            <Event key={index}>
              <button type="button" title="Remove Diaper Change" onClick={() => fields.remove(index)}>X</button>

              <Field
                name={`${diaper}.time`}
                type="text"
                component={this.renderField}
                label="Time"
              />
              <label>
                <Field
                  name={`${diaper}.type`}
                  component={this.renderField}
                  type="radio"
                  value="wet"
                />
                Wet
              </label>
              <label>
                <Field
                  name={`${diaper}.type`}
                  component={this.renderField}
                  type="radio"
                  value="bm"
                />
                BM
              </label>
            </Event>
          )
        })}
      </ul>
    )
  }

  renderNaps = ({fields, meta: { error } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>Add Nap</button>
        </li>

        {fields.map((nap, index) => {
          return (
            <Event key={index}>
              <button type="button" title="Remove Nap" onClick={() => fields.remove(index)}>X</button>

              <Field
                name={`${nap}.napStart`}
                type="text"
                component={this.renderField}
                label="Time"
              />
              <Field
                name={`${nap}.napEnd`}
                type="text"
                component={this.renderField}
                label="Time"
              />
            </Event>
          )
        })}
      </ul>
    )
  }

  renderItemsNeeded() {
    return (
      <div>
        <div>
          <label>Diapers</label>
          <Field
            name="diapers"
            component="input"
            type="checkbox"
          />
        </div>
        <div>
          <label>Wipes</label>
          <Field
            name="wipes"
            component="input"
            type="checkbox"
          />
        </div>
        <div>
          <label>Clothes</label>
          <Field
            name="clothes"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.updateReport(values, () => {
      this.props.history.push('/dashboard')
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h1>{this.props.name}'s Daily Report'</h1>
        <Link to="/dashboard">Back</Link>

        <Fieldset>
          <legend>Meals</legend>
          <FieldArray name="meals" component={this.renderMeal} />
        </Fieldset>

        <Fieldset>
          <legend>Diapers</legend>
          <FieldArray name="diapers" component={this.renderDiaper} />
        </Fieldset>

        <Fieldset>
          <legend>Naps</legend>
          <FieldArray name="naps" component={this.renderNaps} />
        </Fieldset>

        <Fieldset>
          <legend>Items I Need</legend>
          {this.renderItemsNeeded()}
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
  form: 'dailyReport'
})(
  connect(null, { updateReport })(DailyReport)
);
