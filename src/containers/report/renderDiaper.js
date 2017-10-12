import React from 'react';
import styled from 'styled-components';

import { renderField } from './';
import { Field } from 'redux-form';

// Images
import add from '../../styles/images/add.png'
import delete_icon from '../../styles/images/delete_icon.png'

const Event = styled.div`
  display: flex;
  flex-direction: column;
  span{
    background: url(${delete_icon}) no-repeat;
    width: 46px;
    height: 46px;
  }
`
const Ul = styled.ul`
  li span{
    display: block;
    background: url(${add}) no-repeat;
    height: 46px;
    width: 46px;
    cursor: pointer;
  }
`

export const renderDiaper = ({fields, meta: { error } }) => {
  return (
    <Ul>
      <li>
        <span type="button" onClick={() => fields.push({})}></span>
      </li>

      {fields.map((diaper, index) => {
        return (
          <Event key={index}>
            <span type="button" title="Remove Diaper Change" onClick={() => fields.remove(index)}></span>

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
    </Ul>
  )
}
