const getShop = (req, res) => {
  res.send("getShop");
};

const getItem = (req, res) => {
  res.send("getItem");
};

const postItem = (req, res) => {
  res.send("postItem");
};

const getCart = (req, res) => {
  res.send("getCart");
};

const postCart = (req, res) => {
  res.send("postCart");
};

const controllers = {
  getShop,
  getItem,
  postItem,
  getCart,
  postCart,
};

module.exports = controllers;
