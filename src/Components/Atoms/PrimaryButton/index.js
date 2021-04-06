import React from 'react';
import styled from 'styled-components';

const PrimaryButtom = ({children, ...props}) => ( <Button {...props}> { children } </Button> );

export default PrimaryButtom;

const Button = styled.div`
  position: relative;
  top: ${({ aligned }) => aligned ? 0 : '5vh'};
  text-align: center;
  background: rgb(215, 100, 100);
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 25px;
  box-shadow: 0px 2px 4px 1px rgba(15, 15, 15, 0.8);

  :active {
    box-shadow: inset 0 2px 4px 1px rgba(15, 15, 15, 0.8);
    color: rgb(215, 214, 215, 0.8); 
    text-shadow: 1px 1px rgba(15, 15, 15, 0.8);
  }
  
  :hover {
    transition: 0.2s;
    cursor: pointer;
    color: rgb(215, 214, 215, 0.8); 
  }
`;
