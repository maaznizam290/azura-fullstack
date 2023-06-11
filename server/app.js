require("dotenv").config();
require("./strategies/discordstrategy");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const db = require("./database/database");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./routes/router')

app.use(cors())
app.use(express.json())
app.use(router)

// const corsOptions = {
//   origin: "http://localhost:3001",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'none'; style-src 'self' 'unsafe-inline';"
  );
  next();
});

db.then(() => console.log("Connected to MongoDB.")).catch((err) =>
  console.log(err)
);
// Routes
const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");


app.use(
  session({
    secret: "some random secret",
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
    resave: false,
    name: "discord.oauth2",
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://musab:musab123@cluster1.runm9lr.mongodb.net/",
    }),
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware Routes
app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

app.get("/", isAuthorized, (req, res) => {
  res.render("/home");
});

function isAuthorized(req, res, next) {
  if (req.user) {
    console.log("User is logged in.");
    res.redirect("http://localhost:3000/dashboard");
  } else {
    console.log("User is not logged in.");
    next();
  }
}

app.listen(PORT, () =>
  console.log(`Now listening to requests on port ${PORT}`)
);
app.get(
  "/login",
  passport.authenticate("discord", { scope: ["identify", "guilds"] }),
  (req, res) => {
    res.redirect("http://localhost:3000/umbrella");
  }
);
// app.get(
//   "http://localhost:3001/",
//   passport.authenticate("discord", { failureRedirect: "/login" }),
//   (req, res) => {
//     res.redirect("/guilds");
//   }
// );
app.get("/guilds", isAuthorized, (req, res) => {
  res.redirect("http://localhost:3000/collection-tracker");

  res.json(req.user.guilds);
});
// https://discordapp.com/developers/docs/topics/permissions

