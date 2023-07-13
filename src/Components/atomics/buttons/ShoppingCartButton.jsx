import React from 'react';
//styles
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Button = styled.button`
background-color: #333;
color: #fff;
padding: 8px 12px;
border: none;
border-radius: 6px;
cursor: pointer;
  font-size: 20px;
`;

const ShoppingCartButton = () => {
    return (
      <Link to="/cart">
        <Button >ToCart</Button>
      </Link>
    );
};


export default ShoppingCartButton;