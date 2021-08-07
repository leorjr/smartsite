import { useState } from "react";
import "./App.css";

import { useUnits } from "./providers/Units";

import FilterUnit from "./components/FilterUnit";
import Caption from "./components/Caption";

import Home from "./pages/Home";
import Card from "./components/Card";

function App() {
  // const { units } = useUnits();
  // const [weekdays, setWeekdays] = useState("all");
  // const [opened, setOpened] = useState(true);

  // const handleClick = () => {
  //   console.log(weekdays);
  //   console.log(opened);
  // };

  // const handleChange = () => {
  //   setOpened(!opened);
  // };

  return (
    <div className="App">
      {/* <Home /> */}
      <Card />
    </div>
  );
}

export default App;
