import React from "react";
import styled from "styled-components";
// Components
import { Card } from "shared";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HomePage = ({ productsData }) => {
  return (
    <Container>
      <Grid>
        {productsData.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
