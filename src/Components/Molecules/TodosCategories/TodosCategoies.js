import styled from 'syled-components';
import React from 'react';

const TodosCategories = ({children, props}) => {

  return (
    <Container>
      {children}
    </Container>
  );
}

export default TodosCategories;

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 20%;
  height: 100vh;
`;