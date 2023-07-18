import React from "react";
import { NavLink } from "react-router-dom";
// Styles
import styled from "styled-components";

const StyledContactsButton = styled(NavLink)`
  margin-right: 15px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

export const ContactsButton = () => {
  return <StyledContactsButton to="/contacts">Contacts</StyledContactsButton>;
};
