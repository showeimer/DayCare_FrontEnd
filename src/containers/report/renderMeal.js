import React from 'react';
import styled from 'styled-components';

import { renderField } from './';
import { Field } from 'redux-form';

const Event = styled.div`
  display: flex;
  flex-direction: row;
`;

// fields and meta are props
export const renderMeal = ({ fields, meta: { touched, error } }) => {
  console.log(error);
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Meal</button>
      </li>

      {fields.map((meal, index) => {
        return (
          <Event key={index}>
            <button type="button" title="Remove Meal" onClick={() => fields.remove(index)}>X</button>

            <label>
              <Field name={`${meal}.type`} component='select'>
                <option />
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
                <option value="bottle">Bottle</option>
              </Field>
            </label>

            {/* name of this field will show up as meal[index].food */}
            <Field
              name={`${meal}.food`}
              type="text"
              component={renderField}
              label="Food"
            />

            <label>
              <Field
                name={`${meal}.amount`}
                component={renderField}
                type="radio"
                value="all"
              />
              All
            </label>
            <label>
              <Field
                name={`${meal}.amount`}
                component={renderField}
                type="radio"
                value="most"
              />
              Most
            </label>
            <label>
              <Field
                name={`${meal}.amount`}
                component={renderField}
                type="radio"
                value="some"
              />
              Some
            </label>
            <label>
              <Field
                name={`${meal}.amount`}
                component={renderField}
                type="radio"
                value="none"
              />
              None
            </label>
          </Event>
        )
      })}
      {touched ? error : ''}
    </ul>
  )
}
