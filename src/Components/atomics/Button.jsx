import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const AddToCartButton = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default AddToCartButton;