import React from 'react';
import styled from 'styled-components';
import productsData from '../JSON/animalProducts.json';
import CardDesktop from '../Components/CardDesktop';
import CardMobile from '../Components/CardMobile';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledMainGrid = () => {
  return (
    <Container>
      <Grid>
        {productsData.map((product, index) => (
          <React.Fragment key={index}>
            <CardDesktop product={product} />
            <CardMobile product={product} />
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default StyledMainGrid;