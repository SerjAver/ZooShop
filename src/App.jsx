
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Organisms/Header";
import MainGrid from "./Components/Pages/styledMainGreed";


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
