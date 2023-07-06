import React from 'react';
//styles
import styled from 'styled-components';

const SearchInput = styled.input`
  display: flex;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 1px;
  position: relative;
  left: -282px;
  transform: translateX(-20px);
`;


const InputSearch = () => {
    return (
        <SearchInput type="text" placeholder="Search" />
    );
};


export default InputSearch;