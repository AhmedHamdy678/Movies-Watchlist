import "./App.css";
import NavBar from "./components/NavBar";
import AddComponent from "./components/AddComponent";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./components/MoviesContext";

function App() {
  return (
    <>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<AddComponent />} />
        </Routes>
      </ContextProvider>
    </>
  );
}

export default App;
