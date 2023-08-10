import { useNavigate } from "react-router-dom";
import React  from 'react';
//styles
import styled from 'styled-components';



export const ButtonToGoProduct = ({ product, onClose }) => {
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/products`, {
      state: {
        productId: id,
      },
    });
    onClose();
  };

  return (
    <div key={product.id}>
      <button onClick={() => handleButtonClick(product.id)}>Go to product</button>
    </div>
  );
};



