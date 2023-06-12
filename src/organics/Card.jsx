import { styled } from "styled-components";
import AddToCartButton from "../atoms/buttons";


const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    padding: 40px;
  }

  &:hover ${AddToCartButton} {
    display: block;
  }
`;

export default Card