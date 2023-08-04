
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

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;

const SearchResults = styled.div`
  top: 68px;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(122, 225, 167, 0.4);
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 348px;
  overflow-y: auto;
  left: 390px;
  width: 28%;
  height: 65%;
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
    setSearchResults(filteredProducts);
    setShowResults(true);
  };

  const handleSelectResult = (name) => {
    setInput(name);
    setShowResults(false);
    setShowModal(true);
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
                products={searchResults}
                onClose={() => setShowModal(false)}
              />
            </ResultItem>
          ))}

        </SearchResults>
      )}
    </>
  );
};