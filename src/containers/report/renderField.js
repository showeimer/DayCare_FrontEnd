import React from 'react';

import styled from 'styled-components';

const Error = styled.div`
  color: red;
`

// renders general input fields
export const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
      <div>
        <input {...input} type={type} placeholder={label} />
        <Error>
          {touched ? error : ''}
        </Error>
      </div>
  );
};
