const home = function (req, res) {
  return res.render("home", { title: "Home" });
};

module.exports = { home };
// module.exports = home;
