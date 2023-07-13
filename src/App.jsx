import React from "react";
import { BrowserRouter } from "react-router-dom";
//components
import AppRouter from "./Components/organics/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
