import { useHandleCart } from "hooks";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
// Styles
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ModalWindow } from "shared/molecules/Modal";

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

const WrapTotalAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  margin-top: 20px;
`;

const Total = styled.p`
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
  &:hover {
    background-color: red;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const ButtonOpenModal = styled.button`
  background-color: #61ac65;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  height: 47px;
  width: 118px;
  &:hover {
    background-color: teal;
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
  const [modalActive, setModalActive] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const roundedTotal = total.toFixed(2);

  return (
    <CartContainer>
      <h1>Cart</h1>
      <CartList>
        {cartItems
          .filter(
            (c, index) =>
              cartItems.findIndex((item) => item.id === c.id) === index,
          )
          .map((item, index) => (
            <div key={index}>
              <h3 style={{ minWidth: 220, minHeight: 69 }}>{item.name}</h3>
              <ImgComponent src={item.photo} alt={item.name} />
              <p>{item.price}</p>
              <ButtonContainer>
                <AddButton
                  onClick={() => {
                    if (
                      cartItems.filter((c) => c.id === item.id).length <
                      item.quantity
                    ) {
                      addToCart(item);
                      toast.success("Product added to cart", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    }
                  }}
                >
                  {" "}
                  +{" "}
                </AddButton>
                <RedButton
                  onClick={() => {
                    if (cartItems.filter((c) => c.id === item.id).length) {
                      removeFromCart(item);
                      toast.error("Item removed from cart", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: 0,
                        theme: "colored",
                      });
                    }
                  }}
                >
                  {" "}
                  -{" "}
                </RedButton>
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
      <WrapTotalAndButton>
        <Total>Total:${roundedTotal.toLocaleString()}</Total>
        <ButtonOpenModal onClick={() => setModalActive(true)}>
          Order processing
        </ButtonOpenModal>
      </WrapTotalAndButton>
      <ModalWindow active={modalActive} setActive={setModalActive} />
      <ClearButton onClick={removeAllFromCart}>Clear cart</ClearButton>
    </CartContainer>
  );
};
