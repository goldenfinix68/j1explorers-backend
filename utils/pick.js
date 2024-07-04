module.exports = (obj, keys) => {
  return obj
    ? keys.reduce((object, current) => {
        object[current] = obj[current];
      }, {})
    : {};
};
