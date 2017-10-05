import React from 'react';

import { Field } from 'redux-form';

export function renderItemsNeeded() {

  return (
    <div>
      <div>
        <label>Diapers</label>
        <Field
          name="itemsNeeded.diaper"
          component="input"
          type="checkbox"
        />
      </div>
      <div>
        <label>Wipes</label>
        <Field
          name="itemsNeeded.wipes"
          component="input"
          type="checkbox"
        />
      </div>
      <div>
        <label>Clothes</label>
        <Field
          name="itemsNeeded.clothes"
          component="input"
          type="checkbox"
        />
      </div>
    </div>
  )
}
