import React from "react";
// Components
import { ContactsButton, ShoppingCartButton, InputSearch, Logo } from "shared";

// Styles
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: teal;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Header = ({ productsData = [] }) => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
        <InputSearch productsData={productsData} />
      </LogoWrapper>
      <Navigation>
        <ContactsButton />
        <ShoppingCartButton />
      </Navigation>
    </HeaderContainer>
  );
};
