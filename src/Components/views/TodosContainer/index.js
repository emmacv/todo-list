import { TodosContext } from '../../Providers/TodosProviders';
import React, { useContext } from 'react';
import styled from 'styled-components';
import AddTodoForm from '../../Molecules/AddTodoForm/index'

const TodoContainter = ({children, props}) => {
  const {todosList, addTodo, closeTodoForm} = useContext(TodosContext);

  return (
    <Container>
      {todosList.length || 
        <EmptyList> 
          <NoTodosDiv>

            Nothing to show yet.
            <br/>
            <br/>
            Your new life plan is a click away.
          </NoTodosDiv>
          <Button onClick={() => addTodo(<AddTodoForm {...{closeTodoForm}}/>)}>
            Add new Todo
          </Button>
        </EmptyList>
      }

    </Container>
  );
}

export default TodoContainter;

const EmptyList = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

const NoTodosDiv = styled.div`
  position: relative;
  left: -10px;
  width: 10%;
`;

const Container = styled.div`
  position: relative;
  height: 95%;
  margin: 2vh 3vw 2vh 1vw;
  display: grid;
  border-radius: 10px;
  grid-area: todos-cont;
`;

const Button = styled.div`
  position: relative;
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