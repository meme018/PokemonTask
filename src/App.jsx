import { Route, Routes } from "react-router";
import "./App.css";
import PokemonList from "./pages/PokemonList";
import PokemonView from "./pages/PokemonView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:name" element={<PokemonView />} />
      </Routes>
    </>
  );
}

export default App;
