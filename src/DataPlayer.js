import React, { createContext, useContext, useReducer } from "react";

export const DataPlayerContext = createContext();

export const DataPlayer = ({ initialState, reducer, children }) => (
  <DataPlayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataPlayerContext.Provider>
);

export const useDataPlayerValue = () => useContext(DataPlayerContext);
