import styled from 'styled-components';
import React, { useState } from 'react';

const AdddTodoTypecontent = (props) => {

  return (<Input {...props} />)};

export default AdddTodoTypecontent;

const Input = styled.input`
  width: 80%;
  border-style: none;
  border-bottom: 1px solid rgba(15, 15, 15, 0.8);
  background: transparent;
  outline-style: none;

  ::placeholder{
    font-size: 2vh;
  }
`;