import { useState } from "react";
import "./App.css";

import { useUnits } from "./providers/Units";

import FilterUnit from "./components/FilterUnit";
import Caption from "./components/Caption";

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
      {/* <FilterUnit handleClick={handleClick} handleChange={handleChange} />
      <div>
        {opened
          ? units.map((unit) => {
              return <li>{unit.title}</li>;
            })
          : units
              .filter((unit) => {
                return unit.opened === opened;
              })
              .map((unit) => {
                return <li>{unit.title}</li>;
              })}
      </div> */}
      {/* <FilterUnit /> */}
      <Caption />
    </div>
  );
}

export default App;
