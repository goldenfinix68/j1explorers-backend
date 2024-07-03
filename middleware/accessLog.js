module.exports = (req, res, next) => {
  console.log("API access log - ", req.path);
  next();
};
