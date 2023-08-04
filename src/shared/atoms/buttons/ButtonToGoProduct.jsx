import { useNavigate } from "react-router-dom";
import React  from 'react';


export const ButtonToGoProduct = ({products, onClose, handleProductClick }) => {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/products/`);
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



