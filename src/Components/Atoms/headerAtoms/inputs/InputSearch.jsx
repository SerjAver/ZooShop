import React from 'react';
//styles
import styled from 'styled-components';

const SearchInput = styled.input`
display: flex;
padding: 8px;
border: 1px solid #ccc;
border-radius: 5px;
margin-right: 15px;
flex-shrink: 0;

@media (max-width: 768px) {
  margin-right: 0;
  margin-bottom: 15px;
}
`;


const InputSearch = () => {
    return (
        <SearchInput type="text" placeholder="Search" />
    );
};


export default InputSearch;