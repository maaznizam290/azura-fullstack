const router = require("express").Router();
const passport = require("passport");

router.get("/", passport.authenticate("discord"));
router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
    successRedirect: "http://localhost:3000/umbrella",
  })
);

router.get("/logout", isAuthorized, function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    // res.redirect("http://localhost:3000/umbrella");
  });
});
function isAuthorized(req, res, next) {
  if (req.user) {
    console.log("User is logged in.");
    res.redirect("http://localhost:3000/login");
    next();
  } else {
    console.log("User is not logged in.");
    res.redirect("http://localhost:3000/login");
  }
}

module.exports = router;
