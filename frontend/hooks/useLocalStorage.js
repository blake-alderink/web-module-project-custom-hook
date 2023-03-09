import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
    //basically if it exists in local storage already, set that as the initial value, otherwise set the initial value as the initial value variable
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];

  //if the value exists
};

export default useLocalStorage;
