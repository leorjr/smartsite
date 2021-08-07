import { useContext, createContext, useState } from "react";

export const OpenedContext = createContext();

export const OpenedProvider = ({ children }) => {
  const [opened, setOpened] = useState(true);

  return (
    <OpenedContext.Provider value={{ opened, setOpened }}>
      {children}
    </OpenedContext.Provider>
  );
};

export const useOpened = () => useContext(OpenedContext);
