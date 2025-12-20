exports.login = (req, res) => {
  const { email, password } = req.body;

  // Mock authentication logic
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  res.status(200).json({
    message: "Login successful",
    token: "mock-jwt-token",
    user: {
      email,
      subscription: "Free"
    }
  });
};

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res.status(201).json({
    message: "User registered successfully",
    user: {
      name,
      email,
      subscription: "Free"
    }
  });
};