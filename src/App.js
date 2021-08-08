import { useState } from "react";
import "./App.css";

import { useUnits } from "./providers/Units";

import FilterUnit from "./components/FilterUnit";
import Caption from "./components/Caption";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Header /> */}
      <Footer />
    </div>
  );
}

export default App;
