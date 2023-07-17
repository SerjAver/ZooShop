
import React, { useEffect, useState } from 'react';
//component
import Card from '../molecules/Card';
//styles
import styled from 'styled-components';
import AddToCartButton from '../atomics/Button';


const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CartList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Total = styled.p`
  text-align: right;
  margin-top: -35px;
  font-size: 25px;
  
`;

const MyButton = styled.button`
background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 35px;
  width: 118px;
  margin-top: 20px;
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
  `


const CartPage = ({cartItems, addToCart, removeFromCart, handleClearCart}) => {

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const roundedTotal = total.toFixed(2);
  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  
  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartList>
        {cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => handleRemoveItem(item)}>-</button>
          </div>
        ))}
      </CartList>
        <MyButton onClick={handleClearCart}>Clear cart</MyButton>
        <Total>Total:${roundedTotal.toLocaleString()}</Total>
    </CartContainer>
  );
};

export default CartPage;






