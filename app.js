require("dotenv").config();

const express = require("express");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60,
    },
  }),
);

// view engine
app.set("view engine", "ejs");

// routes
const indexRoutes = require("./routes/indexRoute");
const authRoutes = require("./routes/authRoute");
const dashboardRoute = require("./routes/dashboardRoute");
app.use("/", indexRoutes);
app.use("/", authRoutes);
app.use("/", dashboardRoute);

module.exports = app;
