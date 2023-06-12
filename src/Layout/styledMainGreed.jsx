import React from "react";
import { styled } from "styled-components";


const products = [
  { id: 1, name: 'Dog food', price: 6 },
  { id: 2, name: 'Cat food', price: 8 },
  { id: 3, name: 'Hamster food', price: 3 },
  { id: 4, name: 'Parrot food', price: 4 },
  { id: 5, name: 'Lizzard food', price: 15 },

];

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

const DesktopCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

const MobileCard = styled.div`
  border: 1px solid #ccc;
  padding: 40px;
  position: relative;
`;

const Name = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  display: none;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const DesktopCardWrapper = styled.div`
  &:hover ${AddToCartButton} {
    display: block;
  }
`;

const MobileCardButtonWrapper = styled.div`
  ${AddToCartButton} {
    display: block;
  }
`;

const StyledMainsGrid = () => {
  const handleAddToCart = (productId) => {

    console.log(`Product with ID ${productId} was added to your cart`);
  };

  return (
    <Grid>
      {products.map((product) => (
        <React.Fragment key={product.id}>
          <DesktopCardWrapper>
            <DesktopCard>
              <Name>{product.name}</Name>
              <Price>{`price: $${product.price}`}</Price>
              <AddToCartButton onClick={() => handleAddToCart(product.id)}>
              Add to cart
              </AddToCartButton>
            </DesktopCard>
          </DesktopCardWrapper>
          <MobileCard>
            <Name>{product.name}</Name>
            <Price>{`price: $${product.price}`}</Price>
            <MobileCardButtonWrapper>
              <AddToCartButton onClick={() => handleAddToCart(product.id)}>
              Add to cart(M)
              </AddToCartButton>
            </MobileCardButtonWrapper>
          </MobileCard>
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default StyledMainsGrid;