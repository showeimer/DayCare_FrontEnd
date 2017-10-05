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
              name={`${child}.name.firstName`}
              type="text"
              component={renderField}
              label="First Name"
            />
            <Field
              name={`${child}.name.lastName`}
              type="text"
              component={renderField}
              label="Last Name"
            />
            <Field
              name={`${child}.birthdate`}
              type="text"
              component={renderField}
              label="Birthdate (xx/xx/xxxx)"
            />
            <Field
              name={`${child}.parent.firstName`}
              type="text"
              component={renderField}
              label="Parent's First Name"
            />
            <Field
              name={`${child}.parent.lastName`}
              type="text"
              component={renderField}
              label="Parent's Last Name"
            />
            <Field
              name={`${child}.parent.email`}
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
