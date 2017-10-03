import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class DailyReport extends Component {

  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} type={type} placeholder={label} />
          {touched && error && <span> {error} </span>}
        </div>
      </div>
    );
  };


  renderDiaper = ({fields, meta: { error } }) => {
    return (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push({})}>Add Diaper Change</button>
        </li>

        {fields.map((diaper, index) => {
          return (
            <li key={index}>
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
            </li>
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

        <fieldset>
          <legend>Diaper</legend>
          <FieldArray name="diaper" component={this.renderDiaper} />
        </fieldset>
        <button>Save</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'dailyReport'
})(DailyReport);
