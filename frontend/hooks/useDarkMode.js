import React from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
  const [value, setValue] = useLocalStorage("dark mode", initialValue);

  return [value, setValue];
};

export default useDarkMode;
