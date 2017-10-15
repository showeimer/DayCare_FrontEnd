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
const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
  width: 100%;
  input{
    width: 85%;
    margin-left: 20px;
  }
`

const Amount = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 20px 20px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  label{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div{
    padding: 5px 12px;
  }
`


// fields and meta are props
export const renderMeal = ({ fields, meta: { touched, error } }) => {
  // console.log(error);
  return (
    <Ul>
      <li>
        <Add type="button" onClick={() => fields.push({})}></Add>
        <h3>Meals</h3>
      </li>

      {fields.map((meal, index) => {
        return (
          <Event key={index}>
            <Description>
              <Remove type="button" title="Remove Meal" onClick={() => fields.remove(index)}></Remove>
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
            </Description>
            <Amount>
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
            </Amount>

          </Event>
        )
      })}
      {touched ? error : ''}
    </Ul>
  )
}
