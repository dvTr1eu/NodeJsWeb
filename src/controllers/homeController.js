let getHomePage = (req, res) => {
  return res.send("Hello from Controller");
};

module.exports = {
  getHomePage: getHomePage,
};
