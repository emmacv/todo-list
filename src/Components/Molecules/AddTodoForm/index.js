import { TodosContext } from '../../Providers/TodosProviders';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';


const AddTodoForm = props => {
  const {closeTodoForm, todosList, setTodosList} = useContext(TodosContext);
  const [todo, setTodo] = useState({
    name: '', 
    cathegory: '', 
    startDate: '',
    dueDate: '',
    completed: false,
  });

  const stopProp = e =>{
    e.stopPropagation();
  };

  const resetForm = e => {
    alert(todo.startDate);
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

  return(
    <CloseContainer>
      <NewTodoContainer onClick={stopProp}>
        <h1 style={{alignSelf: 'center'}}> Add New Todo </h1>
        <Form onSubmit={closeTodoForm} rows={Object.keys(todo).length}>
          <label> Nombre: </label>
          <input name='name' 
            value={todo['name']} 
            onChange={setChange}
          />
          <label> Categoría: </label>
          <input name='cathegory' 
            value={todo['cathegory']}
            onChange={setChange}
          />
          <label> Fecha de inicio: </label>
          <input input type='date'
            name='startDate' 
            value={todo['startDate']}
            onChange={setChange}  
          />
          <label> Fecha de fin: </label>
          <input type='date'
            name='dueDate' 
            value={todo['dueDate']}
            onChange={setChange}
          />
          <label> ¿Completado?: </label>
          <input type='checkbox'
            name='completed'
            value={todo['completed']}
            onChange={setChange}
          />
        
            <Button onClick={closeTodoForm}>
              Add todo
            </Button>
            <Button onClick={resetForm}>
              Reset
            </Button>
        </Form>
      </NewTodoContainer>
    </CloseContainer>
  );
}

export default AddTodoForm;

const CloseContainer = styled.div`
  background: rgba(12, 15, 25, 0.7);
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
`;

const NewTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(215, 230, 241, 0.8);
  height: 50%;
  width: 50%;
  border-radius: .5em;
`;

const Form = styled.form`
  position: relative;
  display: grid;
  height: inherit;
  grid-template-columns: 20% 20%;
  grid-template-rows: repeat(${({rows}) => rows}, 25%);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding-top: 10%;
  padding-left: 10vw;
  font-size: 2.5vh;

  & > input {
    width: 150%;
  }
`;

const Button = styled.div`
  position: absolute;
  top: 5vh;
  text-align: center;
  background: rgb(215, 100, 100);
  border-radius: 10px;
  padding: 10px 15px;
  margin-right: 25px;
  box-shadow: 0px 2px 4px 1px rgba(15, 15, 15, 0.8);

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