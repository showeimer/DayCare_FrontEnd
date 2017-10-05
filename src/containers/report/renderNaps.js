import React from 'react';
import styled from 'styled-components';

import { renderField } from './';
import { Field } from 'redux-form';

const Event = styled.div`
  display: flex;
  flex-direction: row;
`;

export const renderNaps = ({fields, meta: { error } }) => {
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Nap</button>
      </li>

      {fields.map((nap, index) => {
        return (
          <Event key={index}>
            <button type="button" title="Remove Nap" onClick={() => fields.remove(index)}>X</button>

            <Field
              name={`${nap}.napStart`}
              type="text"
              component={renderField}
              label="Time"
            />
            <Field
              name={`${nap}.napEnd`}
              type="text"
              component={renderField}
              label="Time"
            />
          </Event>
        )
      })}
    </ul>
  )
}
