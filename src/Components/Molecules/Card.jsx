import React from 'react';
import styled from 'styled-components';

const CardDesktop = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

    button {
      display: block;
    }
    
  }
  `;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TypeFood = styled.p`
font-size: 16px;
  margin-bottom: 10px;
  `

const AddToCartButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: none;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const CardM = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  
`;

const AddToCartButtonM = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
`;




const Card = ({ product, addToCart }) => {
  const clickAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <CardDesktop>
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
        <TypeFood>{product.typeFood}</TypeFood>
        <AddToCartButton onClick={clickAddToCart}>Add to Cart</AddToCartButton>
      </CardDesktop>
      <CardM>
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
        <TypeFood>{product.typeFood}</TypeFood>
        <AddToCartButtonM onClick={clickAddToCart}>Add to Cart</AddToCartButtonM>
      </CardM>
    </>
  );
};
export default Card;