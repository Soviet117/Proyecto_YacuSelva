import { BrowserRouter, Routes, Route } from "react-router-dom";
import PeoplePage from "./pages/PoplePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/per" element={<PeoplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
