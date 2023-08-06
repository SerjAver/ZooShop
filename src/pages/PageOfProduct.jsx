import React from 'react';
import { useLocation } from 'react-router-dom';
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
  min-width: 220px;
  min-height: 69px; 

`;

const ImgComponent = styled.img`
  width: 235px;
  height: 267px;
  margin-right: 1px;
  margin-top: 3px;
`;




export const PageOfProduct = () => {

    const location = useLocation();


     const product = JSON.parse(localStorage.getItem('cartItems')).filter( p => p.id === location.state.productId)

    return (
      <CartContainer>
        <h1>PRODUCT</h1>

        <CartList>  
        {product.map((item, index) => (
          <div key={index}>
           <h3>{item.name}</h3>
           <ImgComponent src={item.photo} alt={item.name}/>
            <p>{item.price}</p>
            </div>
            ))}
      </CartList>
      </CartContainer>
    );
  };



