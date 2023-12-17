const getAuth = (req, res) => {
  res.send("getAuth");
};

const postAuth = (req, res) => {
  res.send("postAuth");
};

const getRegister = (req, res) => {
  res.send("getRegister");
};

const postRegister = (req, res) => {
  res.send("postRegister");
};

const getLogout = (req, res) => {
  res.send("getLogout");
};

const controllers = {
  getAuth,
  postAuth,
  getRegister,
  postRegister,
  getLogout,
};

module.exports = controllers;
