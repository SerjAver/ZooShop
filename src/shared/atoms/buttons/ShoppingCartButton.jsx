import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import styled from 'styled-components';


const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
    font-size: 20px;
`;

export const ShoppingCartButton = ({onClick}) => {
    return (
      <Link to="/cart">
        <Button onClick={onClick}>ToCart</Button>
      </Link>
    );
};
