import { useState } from "react";
import "./App.css";

import { useUnits } from "./providers/Units";

function App() {
  const { units } = useUnits();
  const [weekdays, setWeekdays] = useState();
  const [opened, setOpened] = useState(true);

  const handleClick = () => {
    console.log(weekdays);
    console.log(opened);
    console.log(typeof opened);
  };

  const handleChange = () => {
    setOpened(!opened);
  };

  return (
    <div className="App">
      <div>
        <div>
          <h2>Qual período quer treinar?</h2>
          <div>
            <div>
              <input
                type="radio"
                id="manha"
                name="weekdays"
                value="manha"
                onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="manha">Manhã</label>
            </div>
            <div>
              <input
                type="radio"
                id="tarde"
                name="weekdays"
                value="tarde"
                onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="tarde">Tarde</label>
            </div>
            <div>
              <input
                type="radio"
                id="Noite"
                name="weekdays"
                value="Noite"
                onClick={(e) => setWeekdays(e.target.value)}
              />
              <label for="Noite">Noite</label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="checkbox"
                id="closed"
                name="closed"
                value={opened}
                onChange={handleChange}
              />
              <label for="closed">Exibir unidades fechadas</label>
            </div>
            <p>Resultados encontrados: 0</p>
          </div>
          <div>
            <button onClick={handleClick}>Encontrar Unidade</button>
          </div>
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default App;
