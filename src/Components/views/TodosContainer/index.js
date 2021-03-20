import { TodosContext } from '../../Providers/TodosProviders';
import React, { useContext } from 'react';
import styled from 'styled-components';
import AddTodoForm from '../../Molecules/AddTodoForm/index'

const TodoContainter = ({children, props}) => {
  const {todosList, addTodo} = useContext(TodosContext);

  return (
    <Container>
      {todosList.length || 
        <EmptyList> 
          Nothing to show yet. 
          <Button onClick={addTodo(<AddTodoForm />)}>
            Add new Todo
          </Button>
        </EmptyList>
      }

    </Container>
  );
}

export default TodoContainter;

const EmptyList = styled.div`
  
`;

const Container = styled.div`
  position: relative;
  padding: 40vh 30vw;
  margin: 2vh 3vw 2vh 1vw;
  display: grid;
  border-radius: 10px;
  grid-area: todos-cont;
`;

const Button = styled.div`
  position: absolute;
  background: rgb(215, 100, 100);
  border-radius: 10px;
  height: auto;
  padding: 10px 15px;
  margin-right: 25px;
  box-shadow: 0px 2px 4px 1px rgba(15, 15, 15, 0.8);
  top: 2vh; /**remove later */
  &:active {
    box-shadow: inset 0 2px 4px 1px rgba(15, 15, 15, 0.8);
    color: rgb(215, 214, 215, 0.8); 
    text-shadow: 1px 1px rgba(15, 15, 15, 0.8);
  }:hover {
    transition: 0.2s;
    cursor: pointer;
    color: rgb(215, 214, 215, 0.8); 
  }
`;