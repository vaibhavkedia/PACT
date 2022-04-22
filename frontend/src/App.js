import "./App.css";

// Components
import TopBar from "./components/TopBar/TopBar";
import CreateEventPage from "./pages/CreateEventPage/CreateEventPage";
import SingleEventPage from "./pages/SingleEventPage/SingleEventPage";

function App() {
  return (
    <>
      <TopBar />
      <SingleEventPage />
    </>
  );
}

export default App;
