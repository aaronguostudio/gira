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
