import React from 'react';
//components
import { ShoppingCartOutlined } from '@ant-design/icons';
//style
import  styled  from 'styled-components';


const StyledShoppingCartOutlined = styled.button`
  position: relative;
  left: 236px;
  top: 2px;
  cursor: pointer;
  width: 20px;
  border-radius: 39%;
  background-color: #afd0a8;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #393930;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  z-index: 2;
  &:hover {
    background-color: teal;
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }
`;


export const ButtonToCartFromInput = ({product, addToCart }) => {


    const handleButtonClickInInput = () => {
        addToCart(product); 
      };
    return (
        <div>
             <StyledShoppingCartOutlined>
                <ShoppingCartOutlined onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleButtonClickInInput()
                }}/>
              </StyledShoppingCartOutlined>
        </div>
    );
};



