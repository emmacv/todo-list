import ProfileImg from 'Resources/Profile/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg';//!imported as string
import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { TodosContext } from 'Components/Providers/TodosProviders';

const TodosCategories = ({children, props}) => {
  const {todosTypes, setTodosTypes} = useContext(TodosContext);

  const updateTodosTypes = e => {
    //setTodosTypes();
    setTimeout(() => alert('Hello'));
  };

  return (
    <Container>
      <ProfileData>
        <ProfileImage/>

        <ProfileLabel>
          Profile Name
        </ProfileLabel> 
      </ProfileData>
      <TodosListCategories>
        {todosTypes.map(cathegory => <Cathegory as='h4'>{cathegory}</Cathegory>)}

        <Button onClick={(updateTodosTypes)}> 
          Add cathegory 
        </Button>
      </TodosListCategories>

      <AddCathegoryButton />
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

const AddCathegoryButton = styled.div`

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
