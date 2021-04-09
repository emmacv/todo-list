import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import AddTodoForm from 'Components/Molecules/AddTodoForm/index';
import { default as Button } from 'Components/Atoms/PrimaryButton/index';
import { default as Input } from 'Components/Atoms/Input/AddTodoTypeInput';
import uuid from 'react-uuid';
import background from 'Resources/Backgrounds/camylla-battani-AoqgGAqrLpU-unsplash.jpg';
import _ from 'lodash';

const TodoContainter = ({children, props}) => {
  const {todosList, addTodo, closeTodoForm} = useContext(TodosContext);
  const button = <Button onClick={ () => addTodo( <AddTodoForm {...{closeTodoForm}}/> )} aligned > Add new Todo </Button>;

  const filterTodo = event => {
    
  }

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
            <label 
              htmlFor='todo-filter'
              onChange={filterTodo}
              > filter todos: </label>
            <Input fluid='35' id='todo-filter'/>
            {button}
            <label> Progress: </label>
            <TodoProgressBar completedTodos={Math.floor(_.filter(todosList, todo => todo.completed).length / todosList.length * 100)}/>
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
  background-size: 100% 100%;
  align-content: flex-start;
  box-shadow: 0px 0px 20px rgba(15, 15, 15, 0.5); 

  ul {
    margin-left: 50px;
    padding: 20px;
    overflow-y: scroll;

    
    li:hover {
      background: rgba(15, 15, 15, 0.5);
      cursor: pointer;
      transition: 0.4s;
      transform: translateY(-5px);
    }
  }
`; 

const Toolbar = styled.div`
  position: relative;
  top: 0;
  padding: 30px;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
`;

const AddContent = styled.ul`
  margin-right: 100px;
  height: 50%;
  width: 80%;
`;

const TodoProgressBar = styled.div`
  position: relative;
  width: 15%;
  height: 20px;
  box-shadow: 2px solid rgb(12, 15, 12);
  background: grey;
  top: 0; 
  left: 0;
  border-radius: 5px;

  ::before {
    text-align: center;
    clip: border-box;
    content: '${({ completedTodos }) => completedTodos}%';
    position: absolute;
    width: ${({ completedTodos }) => completedTodos}%;
    height: 20px;
    background: rgba(45, 255, 100, 0.5);
    border-radius: ${({ completedTodos }) => completedTodos === 100 ? '5px' : '5px 0 0 5px'}

  }
`;