
import React from 'react';
// Styles
import styled from 'styled-components';

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
    background-color: teal;
  }
  &:active {
    transform: translateY(2px);
  }
  `

  const AddButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 35px;
  width: 37px;
  margin-top: 10px;
  &:hover {
    background-color: teal;
  }
  &:active {
    transform: translateY(2px);
  }
  `

  const ItemQuantity = styled.div`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: green
  
  `


export const CartPage = ({cartItems, addToCart, removeFromCart, handleClearCart}) => {
  const total = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
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
            <AddButton onClick={() => addToCart(item)}>+</AddButton>
            <AddButton onClick={() => handleRemoveItem(item)}>-</AddButton>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <div>{(item.quantity * item.price).toFixed(2)}</div>
          </div>
        ))}
      </CartList>
        <MyButton onClick={handleClearCart}>Clear cart</MyButton>
        <Total>Total:${roundedTotal.toLocaleString()}</Total>
    </CartContainer>
  );
};
