import React, { createContext, useReducer } from "react";

export const themeContext = createContext();

const initialState = { darkMode: true }; // Start with dark mode initially

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode }; // Toggle darkMode between true and false
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
