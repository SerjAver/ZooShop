import React from "react";
//components
import { ShoppingCartOutlined } from "@ant-design/icons";
//style
import styled from "styled-components";
import { useHandleCart } from "hooks";
import { toast } from "react-toastify";

const StyledShoppingCartOutlined = styled.button`
  position: relative;
  top: 22px;
  cursor: pointer;
  width: 34px;
  height: 33px;
  border-radius: 36%;
  background: linear-gradient(135deg, #3498db, #2980b9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  border: none;
  outline: none;
  transition:
    background 0.3s,
    transform 0.2s;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: linear-gradient(135deg, #2980b9, #2574a9);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`;

export const ButtonToCartFromInput = ({ product }) => {
  const { addToCart } = useHandleCart();
  return (
    <div>
      <StyledShoppingCartOutlined>
        <ShoppingCartOutlined
          onClick={(e) => {
            if (product.quantity > 0){
              addToCart(product);
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
            e.stopPropagation();
            e.preventDefault();
          }}
        />
      </StyledShoppingCartOutlined>
    </div>
  );
};
