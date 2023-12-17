const { resolve } = require("path");
const express = require("express");
const mainRoutes = require("./src/routes/mainRoutes.js");
const shopRoutes = require("./src/routes/shopRoutes.js");
const adminRoutes = require("./src/routes/adminRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");

const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", resolve() + "/src/views");

app.use("/", mainRoutes);
// app.use("/shop", shopRoutes);
// app.use("/admin", adminRoutes);
// app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
