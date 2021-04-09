import React, { createContext, useState, useEffect } from 'react';
import styled from 'styled-components';


export const TodosContext = createContext({});

const TodosProviders = ({ children }) => {
  const [todosList, setTodosList] = useState(JSON.parse(localStorage.getItem('todo-list')) || []);
  const [todosTypes, setTodosTypes] = useState(() => JSON.parse(localStorage.getItem('todo-categories')) || []);
  const [todoForm, setTodoForm] = useState(null);
  
  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todosList));
  }, [todosList]);

  useEffect(() => {
    localStorage.setItem('todo-categories', JSON.stringify(todosTypes))
  }, [todosTypes])

  return (
    <TodosContext.Provider value={{
      todosList,
      setTodosList, 
      todosTypes, 
      setTodosTypes, 
      addTodo(todoForm) {
        setTodoForm(todoForm);
      },
      closeTodoForm() {
        setTodoForm(null);
      }
    }}
    >
      {children}
      {todoForm && <FullScreen onClick={() => setTodoForm(null)}>
        {todoForm}
      </FullScreen>}
    </TodosContext.Provider>
  );
}

export default TodosProviders;

const FullScreen = styled.div`

`;