import styled from 'styled-components';
import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = (props) => {
  const links = ['Main Page', 'My activities', 'Contacts']

  return (
    <Nav>
      <ul>
        {links.map(item => <ListItem> {item} </ListItem>)}
      </ul>
    </Nav>
  );
} 

export default NavBar;

const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  color: rgb(5, 5, 25);
  background: rgba(25, 25, 25, 0.5);
  grid-area: navigation;

  ul{
    display: flex;
    flex-flow: row nowrap;
    flex-direction: row;
    height: 100%;
    padding-top: 6px;
  }
`;

const ListItem = styled.li`
  display: inline-block;
  list-style: none;
  transition: .8s;
  padding: 2vh 1vw;  

  &:hover {
    background: rgb(25, 25, 25);
    transform: translate(0, 7px);
    color: rgb(214, 200, 195, 0.8);
    cursor: pointer;
  }
`;