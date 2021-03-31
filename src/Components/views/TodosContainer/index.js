import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext } from 'react';
import styled from 'styled-components';
import AddTodoForm from 'Components/Molecules/AddTodoForm/index'
import { default as Button } from 'Components/Atoms/PrimaryButton/index'

const TodoContainter = ({children, props}) => {
  const {todosList, addTodo, closeTodoForm} = useContext(TodosContext);

  return (
    <Container>
      {todosList.length === 0 ? 
        (<EmptyList> 
          <NoTodosDiv>

            Nothing to show yet.
            <br/>
            <br/>
            Your new life plan is a click away.
          </NoTodosDiv>
          <Button onClick={() => addTodo(<AddTodoForm {...{closeTodoForm}}/>)}>
            Add new Todo
          </Button>
        </EmptyList>) : (
          <MainTodoDiv>

          </MainTodoDiv>
        )
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

const MainTodoDiv = styled(NoTodosDiv)`
  
`; 