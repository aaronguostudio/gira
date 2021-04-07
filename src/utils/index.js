import { useState, useEffect } from "react";
export const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObject = (object) => {
  const res = { ...object };
  Object.keys(object).forEach((key) => {
    const val = object[key];
    if (isFalsy(val)) {
      delete res[key];
    }
  });
  return res;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
