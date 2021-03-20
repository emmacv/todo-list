import React, { createContext, useState } from 'react';


export const TodosContext = createContext({});

const TodosProviders = ({children}) => {
  const [todosList, setTodosList] = useState([]);
  const [todosTypes, setTodosTypes] = useState(['cathegory1', 'cathegory2', 'cathegory3']);

  return (
    <TodosContext.Provider value={{
        todosList,
        setTodosList, 
        todosTypes, 
        setTodosTypes
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProviders;