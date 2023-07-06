import React from "react";
import ButtonHomePage from "../Atoms/headerAtoms/buttons/HomePageButton";
import ContactsButton from "../Atoms/headerAtoms/buttons/ContactsButton";
import ShoppingCartButton from "../Atoms/headerAtoms/buttons/ShoppingCartButton";
import InputSearch from "../Atoms/headerAtoms/inputs/InputSearch";

//styles
import styled from "styled-components";
import Logo from "../Atoms/headerAtoms/HeaderLogo/Logo";

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


const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <ButtonHomePage />
      <InputSearch />
      <ContactsButton />
      <ShoppingCartButton />
    </HeaderContainer>
  );
};

export default Header;
