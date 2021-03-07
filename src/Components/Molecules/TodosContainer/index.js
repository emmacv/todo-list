import styled from 'styled-components';
import React from 'react';

const TodoContainter = ({children, props}) => {

  return (
    <Container>
      {children}
    </Container>
  );
}

export default TodoContainter;

const Container = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
`;