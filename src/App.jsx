import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header></Header>
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
