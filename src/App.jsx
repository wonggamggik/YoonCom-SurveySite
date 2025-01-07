import { Route, Routes } from "react-router-dom";
import "./assets/App.css";
import HomePage from "./pages/HomePage";
import FirstDraftPage from "./pages/FirstDraftPage";
import SecondDraftPage from "./pages/SecondDraftPage";
import ThirdDraftPage from "./pages/ThirdDraftPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/first" element={<FirstDraftPage />}></Route>
      <Route path="/second" element={<SecondDraftPage />}></Route>
      <Route path="/third" element={<ThirdDraftPage />}></Route>
    </Routes>
  );
}

export default App;
