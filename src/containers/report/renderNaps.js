import React from 'react';
import styled from 'styled-components';

import { renderField } from './';
import { Field } from 'redux-form';

// Images
import add from '../../styles/images/add.png'
import delete_icon from '../../styles/images/delete_icon.png'

const Event = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`
const Ul = styled.ul`
  li{
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  li h3{
    margin-left: 30px;
    font-size: 30px;
    color: #fff;
  }

  h4{
    color: #fff;
    font-size: 18px;
  }
`
const Add = styled.span`
  background: url(${add}) no-repeat;
  background-size: 30px 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`
const Remove = styled.span`
  background: url(${delete_icon}) no-repeat;
  background-size: 26px 26px;
  width: 30px;
  height: 26px;
  padding-right: 20px;
`
const Time = styled.div`
  width: 100%;
  margin-left: 30px;
  input{
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
  }
`


export const renderNaps = ({fields, meta: { error } }) => {
  return (
    <Ul>
      <li>
        <Add type="button" onClick={() => fields.push({})}></Add>
        <h3>Naps</h3>
      </li>

      {fields.map((nap, index) => {
        return (
          <Event key={index}>
            <Remove type="button" title="Remove Nap" onClick={() => fields.remove(index)}></Remove>
            <Time>
              <Field
                name={`${nap}.napStart`}
                type="text"
                component={renderField}
                label="Start Time"
              />
              <Field
                name={`${nap}.napEnd`}
                type="text"
                component={renderField}
                label="End Time"
              />
            </Time>
          </Event>
        )
      })}
    </Ul>
  )
}
