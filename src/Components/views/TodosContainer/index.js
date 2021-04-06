import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext } from 'react';
import styled from 'styled-components';
import AddTodoForm from 'Components/Molecules/AddTodoForm/index';
import { default as Button } from 'Components/Atoms/PrimaryButton/index';
import { default as Input } from 'Components/Atoms/Input/AddTodoTypeInput';
import uuid from 'react-uuid';
import background from 'Resources/Backgrounds/xps-bXfQLglc81U-unsplash.jpg'

const TodoContainter = ({children, props}) => {
  const {todosList, addTodo, closeTodoForm} = useContext(TodosContext);
  const button = <Button onClick={ () => addTodo( <AddTodoForm {...{closeTodoForm}}/> )} aligned > Add new Todo </Button>;

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
          {button}
        </EmptyList>) : (
        <MainTodoDiv>
          <Toolbar>
            <label htmlFor='todo-filter'> 
              filter todos
              <Input fluid='70' id='todo-filter'/>
            </label>
            {button}
            <TodoProgressBar/>
          </Toolbar>
          <AddContent>
            {todosList.map(todo => <> 
              <li key={uuid()}> {todo.name} </li>
            </>)}
          </AddContent>
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
  border-radius: 1rem;
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

const MainTodoDiv = styled(EmptyList)`
  flex-flow: row wrap;
  justify-content: flex-start;
  background: url(${background});
  align-content: flex-start;

  ul {
    margin-left: 50px;
  }
`; 

const Toolbar = styled.div`
  position: relative;
  top: 0;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;

  label {
    width: 40%;
  }
`;

const AddContent = styled.ul`
  margin-right: 100px;
`;

const TodoProgressBar = styled.div`
  position: relative;
  width: 15%;
  height: 20px;
  border-style: 2px dotted rgb(12, 15, 12);
  background: grey;
  top: 0; 
  left: 0;

  ::before {
    text-align: center;
    content: '10%';
    position: absolute;
    width: 10%;
    height: 20px;
    background: yellow;
  }
`;