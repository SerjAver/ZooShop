import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, HomePage, CartPage, ContactsPage }  from 'shared';


function App() {
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} cartItems={cartItems} />}/>
          <Route path="/homepage" element={<HomePage addToCart={addToCart} cartItems={cartItems} />}/>
          <Route path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                handleClearCart={handleClearCart}
              />
            }  
          />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
