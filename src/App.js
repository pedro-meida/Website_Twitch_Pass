import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas / Rotas que podem ser acedidos por todos os utilizadores*/}
        <Route path="/" element={<LandingPage />} />

        {/* Rotas que não existem */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
