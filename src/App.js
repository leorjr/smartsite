import "./App.css";

import { useUnits } from "./providers/Units";

function App() {
  const { units } = useUnits();

  console.log(units);

  return <div className="App">teste</div>;
}

export default App;
