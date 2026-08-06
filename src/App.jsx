import { Routes, Route } from "react-router-dom";
import PortfolioV1 from "./pages/PortfolioV1";
import PortfolioV2 from "./pages/PortfolioV2";


function App() {

  return (
    <Routes>
      <Route path="/" element={<PortfolioV1 />} />
      <Route path="/v2" element={<PortfolioV2 />} />
    </Routes>
  );
}

export default App;
