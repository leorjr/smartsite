import { useState } from "react";
import "./App.css";

import { useUnits } from "./providers/Units";

import FilterUnit from "./components/FilterUnit";
import Caption from "./components/Caption";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
