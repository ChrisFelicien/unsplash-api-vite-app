import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const getInitialDarkTheme = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;

  const darkThemeStored = localStorage.getItem("darkTheme") === "true";

  return darkThemeStored || prefersDarkMode;
};

const defaultState = {
  isDarkTheme: getInitialDarkTheme(),
  searchedWord: "bird"
};

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  localStorage.setItem("darkTheme", state.isDarkTheme);

  useEffect(() => {
    if (state.isDarkTheme) document.body.classList.toggle("dark-theme");
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
