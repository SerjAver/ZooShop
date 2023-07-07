
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/organics/Header";
import MainGrid from "./Components/otherPages/StyledMainGreed";


function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <MainGrid />
    </BrowserRouter>
    </>
  );
};

export default App
