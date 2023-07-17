import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  
  const removeFromCart = (product) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex(item => item === product);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
      return prevItems;
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/homepage" element={<MainGrid addToCart={addToCart} cartItems={cartItems} />}/>
        <Route path="/cart" 
               element={<CartPage 
               cartItems={cartItems} 
               addToCart={addToCart} 
               removeFromCart={removeFromCart} 
               handleClearCart={handleClearCart}/>} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};


export default AppRouter;








// const addToCart = (product) => {
//   setCartItems((prevItems) => [...prevItems, product]);
// };


// const removeFromCart = (product) => {
//   setCartItems((prevItems) => {
//     const index = prevItems.findIndex(item => item === product);
//     if (index !== -1) {
//       const updatedItems = [...prevItems];
//       updatedItems.splice(index, 1);
//       return updatedItems;
//     }
//     return prevItems;
//   });
// };

// const handleClearCart = () => {
//   setCartItems([]);
// };