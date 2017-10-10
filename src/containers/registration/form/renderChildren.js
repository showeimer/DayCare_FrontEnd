import React from 'react';
import styled from 'styled-components';

import { renderField } from '../../report';
import { Field } from 'redux-form';

const Event = styled.div`
  display: flex;
  flex-direction: column;
`;

// fields and meta are props
export const renderChildren = ({ fields, meta: { touched, error } }) => {
  console.log(error);
  return (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Add Child</button>
      </li>

      {fields.map((child, index) => {
        return (
          <Event key={index}>
            <button type="button" title="Remove Child" onClick={() => fields.remove(index)}>X</button>

            <Field
              name='firstName'
              type="text"
              component={renderField}
              label="First Name"
            />
            <Field
              name='lastName'
              type="text"
              component={renderField}
              label="Last Name"
            />
            <Field
              name='dob'
              type="text"
              component={renderField}
              label="Birthdate (mm/dd/yyyy)"
            />
            <Field
              name='parentFirstName'
              type="text"
              component={renderField}
              label="Parent's First Name"
            />
            <Field
              name='parentLastName'
              type="text"
              component={renderField}
              label="Parent's Last Name"
            />
            <Field
              name='parentEmail'
              type="email"
              component={renderField}
              label="Parent's Email"
            />
          </Event>
        )
      })}
      {touched ? error : ''}
    </ul>
  )
}
