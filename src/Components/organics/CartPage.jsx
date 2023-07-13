
import React from 'react';
//component
import Card from '../molecules/Card';
//styles
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
  margin-top: 20px;
`;



const CartPage = ({cartItems}) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContainer>
            <h1>Cart</h1>
            <CartList>
                {cartItems.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}
            </CartList>
            <Total>Total: ${total}</Total>
        </CartContainer>
    );
};


export default CartPage;