import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const CardMobile = ({ product }) => {
  return (
    <Card>
      <Title>{product.name}</Title>
      <Price>{product.price}</Price>
      <AddToCartButton>Add to Cart</AddToCartButton>
    </Card>
  );
};

export default CardMobile;