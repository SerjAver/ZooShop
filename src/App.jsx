import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// JSON
import db from "../animalProducts.json";
// Components
import { Header } from "shared";
import { HomePage, CartPage, ContactsPage, PageOfProduct } from "pages";
// Styles
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const productsData = db || [];
  return (
    <>
      <BrowserRouter>
      <ToastContainer
                  position="top-right"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
        <Header productsData={productsData} />
        <Routes>
          <Route path="/" element={<HomePage productsData={productsData} />} />
          <Route
            path="/homepage"
            element={<HomePage productsData={productsData} />}
          />
          <Route
            path="/cart"
            element={<CartPage productsData={productsData} />}
          />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route
            path="/products"
            element={<PageOfProduct productsData={productsData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
