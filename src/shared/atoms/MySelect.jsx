import React, { useState } from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  width: 128px; 
  background-color: #fbfbfb;
  color: #333;
  appearance: none;
  cursor: pointer;
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border-color: #007bff; 
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
`;

const ArrowIcon = styled.span`
  position: absolute;
  top: 36%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none; 

  &::before {
    content: "▼"; 
  }

  &:hover::before {
    content: "|";
`;

export const MySelect = ({ options, defaultValue, value, onChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    toggleDropdown();
  };

  return (
    <SelectContainer>
      <StyledSelect
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onClick={toggleDropdown}
      >
        <option disabled={true} value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.name}
          </option>
        ))}
      </StyledSelect>
      <ArrowIcon onClick={toggleDropdown}></ArrowIcon>
    </SelectContainer>
  );
};
