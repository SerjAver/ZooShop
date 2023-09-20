import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import { ButtonToCartFromInput } from "../buttons/ButtonToCartFromInput";
// Styles
import styled from "styled-components";

const SearchInput = styled.input`
  display: flex;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 15px;
  flex-shrink: 0;
  position: relative;

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
  max-height: calc(89vh - 67px);
  width: 300px;
  top: 67px;
  left: 298px;

  @media (max-width: 768px), (max-height: 360px) {
    position: static;
    width: 339px;
    height: 629px;
    margin-top: -8px;
    overflow-y: scroll;
  }
`;

const CloseButton = styled.button`
  position: sticky;
  top: 2px;

  cursor: pointer;
  width: 26px;
  height: 26px;
  border-radius: 38%;
  background-color: #ff6b6b;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: none;
  transition:
    background-color 0.3s,
    transform 0.2s;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff4f4f;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }

  @media (max-width: 768px), (max-height: 360px) {
    position: sticky;
  }
`;

const Img = styled.img`
  width: 36%;
  height: 100%;
`;

const ImgComponentOver = styled.img`
  width: 68%;
  filter: grayscale(100%);
`;

const ResultItem = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
  border: 1px solid #2ae10440;
  border-radius: 9px;
  height: 99px;
  width: 276px;
  transition: box-shadow 0.2s;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0 0 5px rgba(54, 162, 155, 1);
  }
  @media (max-width: 768px), (max-height: 360px) {
    height: 126px;
    width: 333px;
  }
`;

export const InputSearch = ({ productsData }) => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

  const handleSearch = (value) => {
    setInput(value);
    const filteredProducts = productsData.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase()),
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
    setInput("");
  };

  const handleOutsideClick = (e) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(e.target)
    ) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    if (showResults) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showResults]);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/products`, {
      state: {
        productId: id,
      },
    });
  };

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
          <CloseButton onClick={() => setShowResults(false)}>х</CloseButton>
          {searchResults.map((product, index) => (
            <div
              key={index}
              onClick={(e) => {
                product.quantity > 0
                  ? handleButtonClick(product.id)
                  : e.stopPropagation();
                e.preventDefault();
              }}
            >
              <ResultItem
                key={index}
                onClick={() => handleSelectResult(product.name)}
              >
                {product.quantity > 0 ? (
                  <Img src={product.photo} alt={product.name} />
                ) : (
                  <>
                    <ImgComponentOver
                      src={product.photo}
                      alt={product.name}
                      style={{ color: "grey" }}
                    />
                  </>
                )}

                {product.name}
                <ButtonToCartFromInput product={product} />
              </ResultItem>
            </div>
          ))}
        </SearchResults>
      )}
    </>
  );
};
