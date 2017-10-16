import React from 'react';
import styled from 'styled-components'

import { Field } from 'redux-form';

const Options = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-left: 50px;
  width: 30%;
`
const Item = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

export function renderItemsNeeded() {

  return (
    <Options>
      <Item>
        <label>Diapers</label>
        <Field
          name="itemsNeeded.diaper"
          component="input"
          type="checkbox"
        />
      </Item>
      <Item>
        <label>Wipes</label>
        <Field
          name="itemsNeeded.wipes"
          component="input"
          type="checkbox"
        />
      </Item>
      <Item>
        <label>Clothes</label>
        <Field
          name="itemsNeeded.clothes"
          component="input"
          type="checkbox"
        />
      </Item>
    </Options>
  )
}
