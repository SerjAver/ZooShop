import React, { useState } from 'react';
// Assets
import cartIcon from '../../assets/Cart.png';
// Styles
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
  border-radius: 15px;
  margin-right: 105px;
  cursor: pointer;
  display: block;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
`;


const CartIcon = styled.img`
  
  width: 24px;
  height: 24px;
  margin-right: 7px;
  margin-top: 9px;
`;


export const Card = ({ product, addToCart, cartItems }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);
  const [icon, setIcon] = useState(isInCart);

  const clickAddToCart = () => {
    addToCart(product);
    setIcon(true);
  };

  return (
    <>
      <CardDesktop>
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
        <TypeFood>{product.typeFood}</TypeFood>
        <AddToCartButton onClick={clickAddToCart}>
          Add to Cart
        </AddToCartButton>
          {isInCart && icon && (
            <CartIcon src={cartIcon} alt="Cart" icon="true" />
          )}
      </CardDesktop>
    </>
  );
};
