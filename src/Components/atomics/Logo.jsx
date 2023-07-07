import React from 'react';
//styles
import styled from 'styled-components';

const StyleLogo = styled.h1`
  font-size: 42px;
  margin: 0;
  margin-right: 25px;
`;

const Logo = () => {
    return (
        <StyleLogo>My ZooShop</StyleLogo>
    );
};


export default Logo;