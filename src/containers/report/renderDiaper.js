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
  input{
    font-size: 18px;
    border: none;
    border-radius: 10px;
    text-align: center;
  }
  select{
    font-size: 18px;
    border: none;
    border-radius: 10px;
  }
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
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  input{
    margin-left: 10px;
    width: 30%;
  }
`
const Details = styled.div`
  margin: 20px 0 0 56px;
  display: flex;
  flex-direction: row;
  label{
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  label div{
    margin-right: 10px;
  }
`


export const renderDiaper = ({fields, meta: { error } }) => {
  return (
    <Ul>
      <li>
        <Add type="button" onClick={() => fields.push({})}></Add>
        <h3>Diapers</h3>
      </li>

      {fields.map((diaper, index) => {
        return (
          <Event key={index}>
            <Time>
              <Remove type="button" title="Remove Diaper Change" onClick={() => fields.remove(index)}></Remove>
              <Field
                name={`${diaper}.time`}
                type="text"
                component={renderField}
                label="Time"
              />
            </Time>
            <Details>

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
            </Details>
          </Event>
        )
      })}
    </Ul>
  )
}
