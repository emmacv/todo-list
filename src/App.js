import TodosCategories from 'Components/views/TodosCategories/index';
import TodosContainer from 'Components/views/TodosContainer/index';
import TodosProvider from 'Components/Providers/TodosProviders';
import Nav from './Components/Molecules/Nav/index';
import styled from 'styled-components';
import React from 'react';
import "./index.css";


const App = () => {

  return (
    <>
      <TodosProvider>

        <MainContainer>
          <Nav />
          <TodosCategories />
          <TodosContainer/>
        </MainContainer>
      </TodosProvider>
    </>
  );
} 

export default App;


const MainContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25% 2.5fr;
  grid-template-rows: 1fr 7fr;
  grid-column-gap: 50px;
  grid-template-areas: 
    "navigation navigation"
    "todos-cat todos-cont";
`;


