const showDashboard = (req, res) => {
  res.render("dashboard/view", {
    user: req.session.user,
  });
};

module.exports = {
  showDashboard,
};
