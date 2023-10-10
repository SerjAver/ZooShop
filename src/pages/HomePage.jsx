import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// Components
import { Card } from "shared";
import { MySelect } from "shared/atoms/MySelect";

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
  const [sortedProducts, setSortedProducts] = useState([...productsData]);
  const [sortOption, setSortOption] = useState("");

  const sortProducts = useCallback(
    (option) => {
      setSortOption(option);

      if (option === "title") {
        setSortedProducts(
          [...productsData].sort((a, b) => a.name.localeCompare(b.name)),
        );
      } else if (option === "body") {
        setSortedProducts([...productsData].sort((a, b) => a.price - b.price));
      } else if (option === "body1"){
        setSortedProducts([...productsData].sort((a, b) => b.price - a.price));
      }
    },
    [productsData],
  );
  useEffect(() => {
    sortProducts(sortOption);
  }, [productsData, sortOption, sortProducts]);

  return (
    <Container>
      <div>
        <MySelect
          value={sortOption}
          onChange={sortProducts}
          defaultValue="Sorting to..."
          options={[
            { value: "title", name: "by name" },
            { value: "body", name: "price up" },
            { value: "body1", name: "price down" },
          ]}
        />
      </div>
      <Grid>
        {sortedProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
