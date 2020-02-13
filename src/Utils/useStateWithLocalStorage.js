import { useEffect, useState } from "react";

export const useStateWithLocalStorage = (localStorageKey, initialValue = '') => {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || initialValue
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [localStorageKey, value]);
  return [value, setValue];
};
