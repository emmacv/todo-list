import TodosContainer from './Components/Molecules/TodosContainer/index';
import TodosCategories from './Components/Molecules/TodosCategories/index'


import styled from 'styled-components';
import React from 'react';
import "./index.css";

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


