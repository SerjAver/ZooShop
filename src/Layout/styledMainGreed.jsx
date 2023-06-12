import React from "react";
import { styled } from "styled-components";
import AddToCartButton from "../atoms/buttons";
import Card from "../organics/Card";

const products = [
  { id: 1, name: 'Dog food', price: 6 },
  { id: 2, name: 'Cat food', price: 8 },
  { id: 3, name: 'Hamster food', price: 3 },
  { id: 4, name: 'Parrot food', price: 4 },
  { id: 5, name: 'Lizard food', price: 15 },
];

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;


const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StyledMainsGrid = () => {
  const handleAddToCart = (productId) => {
    console.log(`Product with ID ${productId} was added to your cart`);
  };

  return (
    <Grid>
      {products.map((product) => (
        <Card key={product.id}>
          <Name>{product.name}</Name>
          <Price>{`Price: $${product.price}`}</Price>
          <AddToCartButton onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </AddToCartButton>
        </Card>
      ))}
    </Grid>
  );
};

export default StyledMainsGrid;