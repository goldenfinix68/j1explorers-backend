module.exports = (obj, keys) => {
  const res = {};
  keys.forEach((key) => (res[key] = obj[key]));
  return res;
};
