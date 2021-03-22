import React, { createContext, useState } from 'react';
import styled from 'styled-components';


export const TodosContext = createContext({});

const TodosProviders = ({children}) => {
  const [todosList, setTodosList] = useState([]);
  const [todosTypes, setTodosTypes] = useState(['cathegory1', 'cathegory2', 'cathegory3']);
  const [todoForm, setTodoForm] = useState(null);

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