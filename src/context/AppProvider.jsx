import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  
  const [value, setValue] = useState({ data: null, isOpenModal: false });

  return (
    <AppContext.Provider value={{ ...value, value, setValue }}>
      {children}
    </AppContext.Provider>
  );
};
