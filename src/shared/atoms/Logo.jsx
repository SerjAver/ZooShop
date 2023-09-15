import React from "react";
import { NavLink } from "react-router-dom";
// Styles
import styled from "styled-components";

export const StyleLogo = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-right: 25px;
`;

export const StyleNavLinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 15px;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition:
    color 0.3s,
    transform 0.2s;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ff6e0e, #00ff28);
  background-clip: text;
  color: transparent;

  &:hover {
    color: #ff6600;
    transform: scale(1.05);
  }
`;

export const Logo = () => {
  return (
    <div>
      <StyleNavLinkLogo to="/HomePage">
        <StyleLogo>MyZooShop</StyleLogo>
      </StyleNavLinkLogo>
    </div>
  );
};
