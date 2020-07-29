export const isEmptyObj = (obj: Object): boolean => {
  for (let key in obj) {
    return false;
  }
  return true;
};
