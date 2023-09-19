import React,{ createContext, useContext, useState } from "react";

export const Provider = createContext();

const ContextProvider = ({ children }) => {
  const [title, setTitle] = useState('Dashboard');
  const [nameSec, setSectName] = useState("Hussain");
  //Form Related usestates
 

  const contextValue = {
    title,
    setTitle,
    nameSec,
    setSectName,
    
  };

  return <Provider.Provider value={contextValue}>{children}</Provider.Provider>;
};
export const useContextHook = () => useContext(Provider);


export default ContextProvider
