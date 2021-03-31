import ProfileImg from 'Resources/Profile/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg';//!imported as string
import { default as Button } from 'Components/Atoms/PrimaryButton/index';
import { default as Input } from 'Components/Atoms/Input/AddTodoTypeInput';
import { TodosContext } from 'Components/Providers/TodosProviders';
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const TodosCategories = ({children, props}) => {
  const {todosTypes, setTodosTypes} = useContext(TodosContext);
  const [inputCategory, setInputCategory] = useState(false);
  const [content, setContent] = useState('');

  const valueHandler = event => {
    setContent(event.target.value);
  }

  const updateTodoType = () => {
    if(inputCategory) //here you're querying the last value of this state, not the current one.
      if(content) {
        setTodosTypes([...todosTypes, content]);
        setContent('');
      }
      else {
        setInputCategory(true);
        alert('You must fulfithill the field!');
      }
  }

  const addTodoType = () => {
    setInputCategory(!inputCategory); //the state is set true or false once it's rendering, that's why you get the previous result and not right away the state updated

    updateTodoType();
  };

  const keyHandler = ({keyCode}) => {
    if(keyCode === 13)
      updateTodoType();
  } 

  return (
    <Container>
      <ProfileData>
        <ProfileImage/>

        <ProfileLabel>
          Profile Name
        </ProfileLabel> 
      </ProfileData>
      <TodosListCategories>

        {todosTypes.map(category => <Cathegory as='h4' key={uuid()}>{category}</Cathegory>)}
        {inputCategory && <NewTodoContainer>
        <Input 
          type='text' 
          placeholder='Enter new Todo category'
          onChange={valueHandler}
          value={content}
          onKeyDown={keyHandler}
        />
        <CancelButton onClick={() => {setInputCategory(false); setContent('');}}>x</CancelButton>
        </NewTodoContainer>} 
        <Button onClick={addTodoType}> 
          {`${!inputCategory ? 'Add' : 'Save '} category`} 
        </Button>
      </TodosListCategories>
    </Container>
  );
}

export default TodosCategories;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(255, 255, 255, 0.5);
  grid-area: todos-cat;
  font-size: 3vh;
`;

const NewTodoContainer = styled.div`
  display: flex;
  position: relative;
`

const CancelButton = styled.div`
  cursor: pointer;
  position: relative;
  text-align: justify;
  left: 10px;
  &:hover{
    color: rgba(250, 15, 15, 0.8);
  }
`;


const ProfileData = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  top: 10px;
  align-self: center;
  text-align: center;
`;

const ProfileImage = styled.div` 
  background: center right 55%/ 70% 100% url(${ProfileImg}), linear-gradient(to bottom right, 
    rgba(214, 205, 201, 0.7),
    rgba(214, 205, 201, 0.1)) ;
  border-radius: 50%;
  align-self: center;
  top: 10px;
  width: 30vh;
  height: 30vh;
  border: 2px groove rgba(215, 215, 157, 0.8);
  transition: 0.48s;

  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(25, 142, 205, 0.5); 
  }
`;

const ProfileLabel = styled.h2`
  color: #201;
`;

const TodosListCategories = styled.ul`
  position: relative;
  margin: 30px 0 50px 50px;
`;

const Cathegory = styled.li`
  list-style: none;
  padding: 10px 0;
  transition: .6s;

  &:hover {
    cursor: pointer;
    color: rgb(215, 214, 215, 0.8); 
    background: rgb(25, 25, 25);
    transform: translate(15px, 0);
  }
`;

