import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";
import SurveyPage from "./pages/SurveyPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="main">
        <Routes>
          <Route path="/" element={<SurveyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
