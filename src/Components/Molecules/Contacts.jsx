import React from 'react';
//styles
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;



const Contacts = () => {
    return (
        <ContactContainer>
          <h1>Contacts:</h1>
          <p> email: reactJS@gmail.com;</p>
          <p> adress: Kyiv, podol</p>
          <p> tel: +380950000000</p>
           
        </ContactContainer>
    );
};


export default Contacts;