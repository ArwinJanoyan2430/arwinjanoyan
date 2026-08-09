import { Routes, Route } from "react-router-dom";
import PortfolioV2 from "./pages/PortfolioV2";


function App() {

  return (
    <Routes>
      <Route path="/" element={<PortfolioV2 />} />
    </Routes>
  );
}

export default App;
