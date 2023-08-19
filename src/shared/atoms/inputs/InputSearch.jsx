
import React, { useEffect, useRef, useState } from 'react';
import { ButtonToGoProduct } from '../buttons/ButtonToGoProduct';

//Style
import styled from 'styled-components';



const SearchInput = styled.input`
  display: flex;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 15px;
  flex-shrink: 0;

  @media (max-width: 768px, max-height: 360px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(122, 225, 167, 0.4);
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
  max-height: 530px;
  width: 300px;
  top: 67px;
  left: 411px;
  

  @media (max-width: 768px), (max-height: 360px) {
    width: 166%;
position: static;
width: 339px;
margin-top: -8px;
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 80px;
  right: 694px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f7caa3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #393930;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  z-index: 2;
  &:hover {
    background-color: teal;
    color: white;
  }
  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px), (max-height: 360px) {
    top: 153px;
    right: 23px;
    position: absolute; 
  }
`;


const Img = styled.img`
width: 20%;
height: 31%;
padding: 8px;
`

const ResultItem = styled.div`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;




export const InputSearch = ({ productsData }) => {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);


  const handleSearch = (value) => {
    setInput(value);
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    if (value.length >= 3 && filteredProducts.length > 0) {
     
      setSearchResults(filteredProducts);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSelectResult = (name) => {
    setInput(name);
    setShowResults(false);
    setShowModal(true);
    setInput('');
  };

  const handleOutsideClick = (e) => {
    if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {showResults && searchResults.length > 0 && (
        <SearchResults ref={searchContainerRef}>
          {searchResults.map((product, index) => (
            <ResultItem key={index} onClick={() => handleSelectResult(product.name)}>
              <Img src={product.photo} alt={product.name} />
              {product.name}
              <ButtonToGoProduct
                product={product}
                onClose={() => setShowModal(false)}
              />
            </ResultItem>
          ))}
            <CloseButton onClick={() => setShowResults(false)}>х</CloseButton>

        </SearchResults>
      )}
    </>
  );
};


