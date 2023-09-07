import React from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Styles
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { useHandleCart } from "hooks";

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const CartList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  min-width: 220px;
  min-height: 69px;
`;

const ImgComponent = styled.img`
  width: 235px;
  height: 267px;
  margin-right: 1px;
  margin-top: 3px;
`;

const ImgComponentOver = styled.img`
  width: 235px;
  height: 267px;
  margin-right: 1px;
  margin-top: 3px;
  filter: grayscale(100%);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
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
const Total = styled.p`
  text-align: right;
  margin-top: -35px;
  font-size: 25px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TypeFood = styled(Price)``;

export const PageOfProduct = ({ productsData }) => {
  const location = useLocation();
  const { cartItems, addToCart, removeFromCart } = useHandleCart();
  const product = productsData.filter((p) => p.id === location.state.productId);
  const total =
    cartItems.filter((c) => c.id === product[0].id).length * product[0].price;
  const roundedTotal = total.toFixed(2);

  let sumOfCountProduct = 0;

  product.forEach((item) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (cartItem) {
      sumOfCountProduct += cartItems.filter((c) => c.id === item.id).length;
    }
  });

  return (
    <CartContainer>
      <h1>Product page</h1>

      <CartList>
        {product.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            {item.quantity > 0 ? (
              <ImgComponent src={item.photo} alt={item.name} />
            ) : (
              <>
                <ImgComponentOver
                  src={item.photo}
                  alt={item.name}
                  style={{ color: "grey" }}
                />
              </>
            )}

            <div>{item.class}</div>
            <div>{item.breed}</div>
            <div>{item.weight}</div>
            <TypeFood>{item.typeFood}</TypeFood>
            <div>{item.countryOfOrigin}</div>
            <ButtonContainer>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
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
                      height: "50px",
                    });
                  }
                }}
              >
                +
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
                -
              </RedButton>
            </ButtonContainer>
            <ItemQuantity>{sumOfCountProduct}</ItemQuantity>

            <Price>{item.price}</Price>
          </div>
        ))}
      </CartList>
      <Total>Total: ${roundedTotal.toLocaleString()}</Total>
    </CartContainer>
  );
};
