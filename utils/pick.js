module.exports = (obj, keys) => {
  return obj
    ? keys.reduce((object, key) => {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          object[key] = obj[key];
        }

        return object;
      }, {})
    : {};
};
