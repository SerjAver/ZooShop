import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header }  from 'shared';
import { HomePage, CartPage, ContactsPage } from 'pages'



function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].quantity += 1;
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
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
      const updatedItems = prevItems.map((item) => {
        if (item.name === product.name) {
          if (item.quantity > 0) {
            
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
  
      return updatedItems.filter((item) => item.quantity > 0);
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
