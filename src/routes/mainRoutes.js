const express = require("express");
const controllers = require("../controllers/mainControllers.js");
const router = express.Router();

router
  .get("/", controllers.getMainPage)
  // .get("/home", controllers.getMainPage)
  // .get("/contact", controllers.contactPage)
  // .get("/about", controllers.aboutPage)
  // .get("/faqs", controllers.faqsPage);

module.exports = router;
