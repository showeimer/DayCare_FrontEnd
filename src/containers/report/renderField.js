import React from 'react';

import styled from 'styled-components';

const Error = styled.span`
  color: #FF8987;
  font-size: 18px;
  position: absolute;
  top: -30px;

`
const Div = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`

// renders general input fields
export const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
      <Div>

          {touched ? <Error>{error}</Error> : ''}

        <input {...input} type={type} placeholder={label} />
      </Div>
  );
};
