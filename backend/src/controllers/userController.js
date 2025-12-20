exports.getProfile = (req, res) => {
  res.json({
    name: "Aravind",
    role: "SmartStream User",
    subscription: "Free",
  });
};