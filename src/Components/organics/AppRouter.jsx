import React, { useState } from 'react';
import Header from './Header';
import MainGrid from '../otherPages/StyledMainGreed';
import CartPage from './CartPage';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../molecules/Contacts';

const AppRouter = () => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };



  return (
    <>
      <Header />
      <Routes>
        <Route path="/homepage" element={<MainGrid addToCart={addToCart} />}/>
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};


export default AppRouter;