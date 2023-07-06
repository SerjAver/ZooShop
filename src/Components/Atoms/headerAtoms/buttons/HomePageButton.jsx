import React from 'react';
import { NavLink } from 'react-router-dom';
//styles
import styled from 'styled-components';

const StyleNavLink = styled(NavLink)`
  display: flex;
  margin-right: 1px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  position: relative;
  left: -124px;
  transform: translateX(-20px);

  &:hover {
    text-decoration: underline;
  }
`;




const ButtonHomePage = () => {
    return (
        <StyleNavLink to="/">HomePage</StyleNavLink>
    );
};


export default ButtonHomePage;