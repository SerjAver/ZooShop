// Assets
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/Cart.png";
// Styles
import styled from "styled-components";
import { useHandleCart } from "hooks";

const CardDesktop = styled.div`
  padding: 20px;
  border-radius: 23px;
  height: 100%;
  transition: box-shadow 0.2s;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0 0 5px rgba(54, 162, 155, 1);
    button {
      display: block;
    }
  }
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  margin-top: 18px;
  min-width: 220px;
  min-height: 69px;
`;

const Price = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const TypeFood = styled(Price)``;

const AddToCartButton = styled.button`
  display: flex;
  background-color: #61ac65;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  max-width: 150px;
  max-height: 31px;
  text-align: center;
  justify-content: center;
  &:hover {
    background-color: teal;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const CartIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Photo = styled.img`
  width: 235px;
  height: 267px;
  margin-right: 1px;
  margin-top: 3px;
`;

const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Card = ({ product }) => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useHandleCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCardClick = () => {
    navigate.push({
      pathname: "/products",
      state: { productId: product.id },
    });
  };
  return (
    <>
      <CardDesktop onClick={() => handleCardClick}>
        <Photo src={product.photo} alt={product.name} />
        <Title>{product.name}</Title>
        <br />
        <Price>{product.price}</Price>
        <TypeFood>{product.typeFood}</TypeFood>
        <p></p>In stock: {product.quantity}
        <ButtonsSection>
          <AddToCartButton
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </AddToCartButton>
          {isInCart && <CartIcon src={cartIcon} alt="Cart" />}
        </ButtonsSection>
      </CardDesktop>
    </>
  );
};
