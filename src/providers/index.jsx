import { UnitsProvider } from "../providers/Units";
import { OpenedProvider } from "../providers/Opened";

const Providers = ({ children }) => {
  return (
    <UnitsProvider>
      <OpenedProvider>{children}</OpenedProvider>
    </UnitsProvider>
  );
};

export default Providers;
