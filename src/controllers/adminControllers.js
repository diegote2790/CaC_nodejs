const getAdmin = (req, res) => {
  res.send("getAdmin");
};

const getCreate = (req, res) => {
  res.send("getCreate");
};

const postCreate = (req, res) => {
  res.send("postCreate");
};

const getEditId = (req, res) => {
  res.send("getEditId");
};

const putEditId = (req, res) => {
  res.send("putEditId");
};

const deleteId = (req, res) => {
  res.send("deleteId");
};

const controllers = {
  getAdmin,
  getCreate,
  postCreate,
  getEditId,
  putEditId,
  deleteId,
};

module.exports = controllers;
