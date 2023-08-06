import { useNavigate } from "react-router-dom";
import React  from 'react';

import styled from 'styled-components';



export const ButtonToGoProduct = ({products, onClose, handleProductClick }) => {
    const navigate = useNavigate(products);

  const handleButtonClick = (id) => {
    navigate(`/products`, {
      state: {
        productId: id
      }
    });
    onClose();
  };


  return (

    <div>
        <button onClick={handleButtonClick}>Go to product</button>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product.id)}></div>
      ))}
    </div>

  );
};



