import React from "react";
import { NavLink } from "react-router-dom";
//styles
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

const ContactsButton = () => {
  return <StyledContactsButton to="/contacts">Contacts</StyledContactsButton>;
};

export default ContactsButton;
