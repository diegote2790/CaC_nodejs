const ejs = require("ejs");
const { resolve } = require("path");

const getMainPage = async (req, res) => {
  const pagina = await ejs.renderFile(resolve() + "/src/views/home.ejs");
  res.send(pagina);
};

// const homePage = async (req, res) => {
//   const pagina1 = await ejs.renderFile(resolve() + "/src/views/home.ejs");
//   res.send(pagina1);
// };

// const contactPage = (req, res) => {
//   res.send("contact");
// };

// const aboutPage = (req, res) => {
//   res.send("about");
// };

// const faqsPage = (req, res) => {
//   res.send("faqs");
// };

const controllers = {
  getMainPage,
  // homePage,
  // contactPage,
  // aboutPage,
  // faqsPage,
};

module.exports = controllers;
