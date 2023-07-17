import React, { useState } from 'react';
import styled from 'styled-components';
import cartIcon from '../../assets/Cart.png';

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
  border-radius: 15px;
  margin-right: 105px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
`;



const CartIcon = styled.img`
  display: ${({ icon }) => (icon ? 'inline-block' : 'none')};
  width: 24px;
  height: 24px;
  margin-right: 7px;
  margin-top: 9px;
`;


const Card = ({ product, addToCart, cartItems }) => {
  const isInCart = cartItems.some((item) => item.productId === product.id);
  const [icon, setDisplayIcon] = useState(isInCart);

  const clickAddToCart = () => {
    addToCart(product);
    setDisplayIcon(true);
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
      <CardM>
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
        <TypeFood>{product.typeFood}</TypeFood>
        <AddToCartButtonM onClick={clickAddToCart}>
          Add to Cart
        </AddToCartButtonM>
          {isInCart && icon && (
            <CartIcon src={cartIcon} alt="Cart" icon="true" />
          )}
      </CardM>
    </>
  );
};

export default Card;


