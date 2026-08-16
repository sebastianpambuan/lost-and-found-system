const bcrypt = require("bcrypt");
const userModel = require("../../models/userModel");

const showRegister = (req, res) => {
  res.render("auth/view");
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser) {
      return res.send("Email is already registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.createUser(name, email, hashedPassword);

    res.send("Registration successful!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const showLogin = (req, res) => {
  res.render("auth/view2");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findUserByEmail(email);

    if (!user) {
      return res.send("Invalid email or password.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.send("Invalid email or password.");
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    res.redirect("/dashboard/view");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const logout = (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Unable to logout.");
        }

        res.redirect("/login");
    });
};

module.exports = {
  showRegister,
  register,
  showLogin,
  login,
  logout,
};
