import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { default as Button } from 'Components/Atoms/PrimaryButton/index';
import { default as Input } from 'Components/Atoms/Input/AddTodoTypeInput';

const AddTodoForm = props => {
  const {closeTodoForm, todosList, setTodosList} = useContext(TodosContext);
  const [todo, setTodo] = useState(() => ({
    name: '', 
    cathegory: '', 
    startDate: '',
    dueDate: '',
    completed: false,
  }));
  

  const stopProp = e =>{
    e.stopPropagation();
  };

  const resetForm = e => {
    setTodo({
      name: '', 
      cathegory: '', 
      startDate: '',
      dueDate: '',
      completed: false,
    });
  };

  const setChange = e => {
    setTodo({...todo, [e.target.name]: e.target.value})
  }

  const changeCheck = e => {
    setTodo({...todo, completed: !todo.completed})
  };

  const AddTodo = e => {
    for(let item in todo)
      if(!todo[item] && typeof todo[item] !== 'boolean') {
        alert('You must fill all fields');

        return;
      }

    setTodosList([...todosList, todo]);
    alert('New todo added');

    closeTodoForm();
  };

  return(
    <CloseContainer>
      <NewTodoContainer onClick={stopProp}>
        <Heading> Add New Todo </Heading>
        <Form onSubmit={closeTodoForm} rows={Object.keys(todo).length}>
          <label> Name: </label>
          <Input name='name' 
            value={todo['name']} 
            onChange={setChange}
          />
          <label> Category: </label>
          <Input name='cathegory' 
            value={todo['cathegory']}
            onChange={setChange}
          />
          <label> Start date: </label>
          <Input input type='date'
            name='startDate' 
            value={todo['startDate']}
            onChange={setChange}  
          />
          <label> Deadline: </label>
          <Input type='date'
            name='dueDate' 
            value={todo['dueDate']}
            onChange={setChange}
          />
          <label> Completed?: </label>
          <Toggle id='toggle'>
            <Input type='checkbox'
              name='completed'
              checked={todo.completed}
              onChange={changeCheck}
            />
            <Container />
          </Toggle>
          <ButtonContainer>

            <Button onClick={AddTodo}>
              Add todo
            </Button>
            <Button onClick={resetForm}>
              Reset 
            </Button>
          </ButtonContainer>
        </Form>
      </NewTodoContainer>
    </CloseContainer>
  );
}

export default AddTodoForm;

const modal = keyframes`
  from {
    top: -10px;
    opacity: 0;
  };

  to {
    top: 0;
    opacity: 1;
  }
`;

const CloseContainer = styled.div`
  background: rgba(12, 15, 25, 0.7);
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h1`
  align-self: center; 

  ::before, ::after {
    content: '|'
  }
`;

const NewTodoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(215, 230, 241, 0.8);
  height: 50%;
  width: 50%;
  border-radius: .5em;
  box-shadow: 0 5px 10px 5px rgba(15, 15, 15, 0.4), 0 7px 20px 5px rgba(15, 15, 15, 0.8);
  animation: ${modal} 0.5s;
`;

const Form = styled.form`
  position: relative;
  display: grid;
  height: 100%;
  grid-template-columns: 20% 30% 30%;
  grid-template-rows: repeat(${({rows}) => rows}, 15%);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding-top: 10%;
  padding-left: 10vw;
  font-size: 2.5vh;
`;

const ButtonContainer = styled.div`
  & > div:first-child {
    margin-bottom: 20px;
  }
  grid-row: 1 / 5;
  grid-column: 3 / 3;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  top: 0; 
  height: 100%;
  width: 100%;
  background: rgba(145, 12, 14, .2);  
  border-radius: 2em;
  padding-left: 8%;
  transition: 0.4s; /**You need to specify the animation property in every component you need it. Is not inherined.*/
  align-items: center;

  ::before {
    transition: 0.4s;
    position: relative; /**!if you remove the display property set flex, you'll need to specify the position property.*/
    content: '';
    width: 1.7vw;
    height: 1.7vw;
    background: white;
    border-radius: 50%;
  }
`;

const Toggle = styled.label`
  height: 90%;
  width: 30%;
  position: relative;
  display: inline-block;
  cursor: pointer;

  & > input {
    opacity: 0;
  }

  input:checked + ${Container}::before {
    transform: translateX(75%);
  }

  input:checked + ${Container} {
    background: rgba(15, 15, 15, 0.8);
  }
`;