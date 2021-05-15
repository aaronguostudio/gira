import { useState, useEffect } from "react";
export const isFalsy = (val: unknown) => (val === 0 ? false : !val);
export const isVoid = (val: unknown) => val === undefined || val === null || val === ''

export const cleanObject = (object: {[key: string]: unknown}) => {
  const res = { ...object };
  Object.keys(object).forEach((key) => {
    const val = object[key];
    if (isVoid(val)) {
      delete res[key];
    }
  });
  return res;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: T, delay: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useArray = <T>(arr: T[]) => {
  const [value, setValue] = useState(arr)
  const add = (p: T) => {
    setValue([...value, p])
  }
  const clear = () => {
    setValue([])
  }
  const removeIndex = (index: number) => {
    const copy = [...value]
    copy.splice(index, 1)
    setValue(copy)
  }

  return {
    value,
    setValue,
    clear,
    removeIndex,
    add
  }
}
