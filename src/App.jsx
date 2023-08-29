import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productsData from '../animalProducts.json'
// Components
import {  Header }  from 'shared';
import { HomePage, CartPage, ContactsPage, PageOfProduct} from 'pages'



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productIsOver, setProductIsOver] = useState(productsData)



  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === product.name);
    const selectedItem = productIsOver.find((item) => item.name === product.name);
    
    if (existingItemIndex !== -1 && selectedItem.quantity > 0) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].amount += 1;
      selectedItem.quantity -= 1;
      setCartItems(updatedItems);
      setProductIsOver([...productIsOver]);
    } 
    else if (selectedItem.quantity > 0) {
      setCartItems((prevItems) => [...prevItems, { ...product, amount: 1 }]);
      selectedItem.quantity -= 1;
      setProductIsOver([...productIsOver]);
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
      let hasChanged = false; 
      const updatedItems = prevItems.map((item) => {
        if (item.name === product.name) {
          if (item.amount > 0) {
            hasChanged = true; 
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });
  
      if (hasChanged) {
        const updatedProductIsOver = productIsOver.map((item) => {
          if (item.name === product.name) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
  
        setProductIsOver(updatedProductIsOver);
      }
  
      return updatedItems;
    });
  };
 

  const handleClearCart = () => {
    setCartItems([]);
  };



  
  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} addToCart={addToCart}/>
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
          <Route path="/products" element={<PageOfProduct addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} 
                handleClearCart={handleClearCart}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
