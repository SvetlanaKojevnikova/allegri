import { createContext } from "react";

export const CustomContext = createContext();

const Context = (props) => {
  const value = {};
  return (
    <CustomContext.Provider value={value}>
      {props.chidren}
    </CustomContext.Provider>
  );
};

export default Context;
