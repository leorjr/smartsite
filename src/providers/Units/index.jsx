import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
  const [units, setUnits] = useState();

  useEffect(() => {
    api.get().then((response) => {
      setUnits(response.data.locations);
    });
  }, []);

  return (
    <UnitsContext.Provider value={{ units }}>{children}</UnitsContext.Provider>
  );
};

export const useUnits = () => useContext(UnitsContext);
