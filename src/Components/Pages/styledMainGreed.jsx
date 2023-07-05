import React from 'react';
import styled from 'styled-components';
import productsData from '../../JSON/animalProducts.json'

//components
import CardDesktop from '../Molecules/Card';

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

const MainGrid = () => {
  return (
    <Container>
      <Grid>
        {productsData.map((product, index) => (
            <CardDesktop key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};

export default MainGrid;