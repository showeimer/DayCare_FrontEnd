import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h1>{this.props.name}'s Daily Report'</h1>
        <Link to="/dashboard">Back</Link>

        <Fieldset>
          <legend>Meals</legend>
          <FieldArray name="meals" component={this.renderMeal} />
        </Fieldset>

        <Fieldset>
          <legend>Diaper</legend>
          <FieldArray name="diapers" component={this.renderDiaper} />
        </Fieldset>

        <button>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'dailyReport'
})(DailyReport);
