import styled from 'styled-components';
import React from 'react';
import "./index.css";
import TodosContainer from './Components/Molecules/TodosContainer/index'

const App = () => {
  return (
    <>
      <MainContainer>
        <TodosCategories />
        <TodosContainer />
      </MainContainer>
    </>
  );
}

export default App;


const MainContainer = styled.div`
  top: 0;
  left: 0;
  height: auto;
  display: flex;
`;

const TodosCategories = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  width: 20%;
  height: 100vh;
`;
