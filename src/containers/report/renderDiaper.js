import React from 'react';
import styled from 'styled-components';

import { renderField } from './';
import { Field } from 'redux-form';

const Event = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderDiaper = ({fields, meta: { error } }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Diaper Change</button>
      </li>

      {fields.map((diaper, index) => {
        return (
          <Event key={index}>
            <button type="button" title="Remove Diaper Change" onClick={() => fields.remove(index)}>X</button>

            <Field
              name={`${diaper}.time`}
              type="text"
              component={renderField}
              label="Time"
            />
            <label>
              <Field
                name={`${diaper}.type`}
                component={renderField}
                type="radio"
                value="dry"
              />
              Dry
            </label>
            <label>
              <Field
                name={`${diaper}.type`}
                component={renderField}
                type="radio"
                value="wet"
              />
              Wet
            </label>
            <label>
              <Field
                name={`${diaper}.type`}
                component={renderField}
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
