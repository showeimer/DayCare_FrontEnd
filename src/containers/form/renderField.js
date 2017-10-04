import React from 'react';

import styled from 'styled-components';

const Error = styled.div`
  color: red;
`

// renders general input fields
const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <div>
        <input {...input} type={type} placeholder={label} />
      </div>
      <Error>
        {touched ? error : ''}
      </Error>
    </div>
  );
};

export default renderField;
