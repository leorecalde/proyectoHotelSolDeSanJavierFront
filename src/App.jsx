import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/common/Navbar/NavbarComponent";
import Index from "./components/pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
