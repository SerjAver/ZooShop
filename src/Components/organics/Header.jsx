import React from "react";
// Components
import ButtonHomePage from "../atomics/buttons/HomePageButton";
import ContactsButton from "../atomics/buttons/ContactsButton";
import ShoppingCartButton from "../atomics/buttons/ShoppingCartButton";
import InputSearch from "../atomics/inputs/InputSearch";

//styles
import styled from "styled-components";
import Logo from "../atomics/Logo";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: teal;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Logo />
        <ButtonHomePage />
        <InputSearch />
      </LogoWrapper>
      <Navigation>
        <ContactsButton />
        <ShoppingCartButton />
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
