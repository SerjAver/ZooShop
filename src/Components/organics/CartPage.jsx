
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
  margin-top: 20px;
`;


const CartPage = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const roundedTotal = total.toFixed(2);
  const [cart, setCart] = useState(cartItems);

  const handleAddItem = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeProductFromCart = (product) => {
    setCart((prevCart) => prevCart.filter(i => i.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContainer>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => handleAddItem(item)}>+</button>
          <button onClick={() => removeProductFromCart(item)}>-</button>
        </div>
      ))}
      <Total>Total: ${roundedTotal}</Total>
      <button onClick={() => clearCart()}>Clear cart</button>
    </CartContainer>
  );
};



export default CartPage;

