const express = require("express");
const controllers = require("../controllers/adminControllers.js");
const router = express.Router();

router
  .get("/", controllers.getAdmin)
  .get("/create", controllers.getCreate)
  .post("/create", controllers.postCreate)
  .get("/edit/:id", controllers.getEditId)
  .put("/edit/:id", controllers.putEditId)
  .delete("/delete/:id", controllers.deleteId);

module.exports = router;
