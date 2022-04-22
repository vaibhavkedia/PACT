import "./App.css";

// Components
import TopBar from "./components/TopBar/TopBar";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";
import HomePage from "./pages/HomePage";

// Router
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/event/:id" element={<SingleEventPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
