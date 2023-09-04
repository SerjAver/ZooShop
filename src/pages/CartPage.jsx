import { useHandleCart } from "hooks";
import React from "react";
import _ from "lodash";
// Styles
import styled from "styled-components";

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const CartList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  min-width: 220px;
  min-height: 69px;
`;

const Total = styled.p`
  text-align: right;
  margin-top: -35px;
  font-size: 25px;
`;

const ClearButton = styled.button`
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
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AddButton = styled(ClearButton)`
  width: 37px;
  margin-top: 10px;
  &:hover {
    background-color: teal;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const RedButton = styled(AddButton)`
  &:hover {
    background-color: red;
  }
`;

const ItemQuantity = styled.div`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: green;
`;
const ImgComponent = styled.img`
  width: 235px;
  height: 267px;
  margin-right: 1px;
  margin-top: 3px;
`;

export const CartPage = () => {
  const { cartItems, removeAllFromCart, addToCart, removeFromCart } =
    useHandleCart();
  const total = cartItems.reduce(
    (acc, item) =>
      acc + cartItems.filter((c) => c.id === item.id).length * item.price,
    0,
  );
  const roundedTotal = total.toFixed(2);

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartList>
        {_.uniqBy(cartItems, "id").map((item, index) => (
          <div key={index}>
            <h3 style={{ minWidth: 220, minHeight: 69 }}>{item.name}</h3>
            <ImgComponent src={item.photo} alt={item.name} />
            <p>{item.price}</p>
            <ButtonContainer>
              <AddButton onClick={() => addToCart(item)}>+</AddButton>
              <RedButton onClick={() => removeFromCart(item)}>-</RedButton>
            </ButtonContainer>
            <ItemQuantity>
              {cartItems.filter((c) => c.id === item.id).length}
            </ItemQuantity>
            <div>
              {(
                cartItems.filter((c) => c.id === item.id).length * item.price
              ).toFixed(2)}
            </div>
          </div>
        ))}
      </CartList>
      <ClearButton onClick={removeAllFromCart}>Clear cart</ClearButton>
      <Total>Total:${roundedTotal.toLocaleString()}</Total>
    </CartContainer>
  );
};
