import React from 'react';
import styled from 'styled-components';

import { renderField } from '../../form';
import { Field } from 'redux-form';

const Event = styled.div`
  display: flex;
  flex-direction: row;
`;

// fields and meta are props
export const renderGroups = ({ fields, meta: { touched, error } }) => {
  console.log(error);
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Group</button>
      </li>

      {fields.map((group, index) => {
        return (
          <Event key={index}>
            <button type="button" title="Remove Group" onClick={() => fields.remove(index)}>X</button>

            <Field
              name={`${group}.name`}
              type="text"
              component={renderField}
              label="Group Name"
            />
            <Field
              name={`${group}.teacher`}
              type="text"
              component={renderField}
              label="Teacher's Name"
            />
          </Event>
        )
      })}
      {touched ? error : ''}
    </ul>
  )
}
