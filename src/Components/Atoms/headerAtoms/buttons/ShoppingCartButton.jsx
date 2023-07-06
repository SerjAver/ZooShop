import React from 'react';
//styles
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

const ShoppingCartButton = () => {
    return (
        <Button>ToCart</Button>
    );
};


export default ShoppingCartButton;