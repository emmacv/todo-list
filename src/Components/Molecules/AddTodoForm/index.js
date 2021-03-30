import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';


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

  const AddTodo = e => {
    for(let item in todo)
      if(!todo[item])
      {
        alert('Debe llenar todos los campos');
        
        return;
      }

    setTodosList(...todosList, todo);
    closeTodoForm();
  };

  return(
    <CloseContainer>
      <NewTodoContainer onClick={stopProp}>
        <Heading> Add New Todo </Heading>
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

const Heading = styled.h1`
  align-self: center; 

  &::after{
    content: 'x';
    position: relative;
    left: 90%;
    cursor: pointer; 
  }
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
  height: 100%;
  grid-template-columns: 20% 30% 30%;
  grid-template-rows: repeat(${({rows}) => rows}, 15%);
  grid-column-gap: 20px;
  grid-row-gap: 10px;
  padding-top: 10%;
  padding-left: 10vw;
  font-size: 2.5vh;

  input {
    border-radius: 10%;
    border-style: none;
  }
  input:focus{
    outline: solid rgba(12, 15, 25, 0.7) 1px;
  }
`;

const ButtonContainer = styled.div`
  & > div:first-child {
    margin-bottom: 20px;
  }
  grid-row: 1 / 5;
  grid-column: 3 / 3;
`;

const Button = styled.div`
  position: relative;
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