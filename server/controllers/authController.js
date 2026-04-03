// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   const userExists = await User.findOne({ email });
//   if (userExists) return res.status(400).json({ message: "User exists" });

//   const hashed = await bcrypt.hash(password, 10);

//   const user = await User.create({ name, email, password: hashed });

//   res.json({ message: "User created" });
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: "Invalid" });

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(400).json({ message: "Invalid" });

//   const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "30d" });

//   res.json({ token });
// };

// module.exports = { register, login };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret",
      { expressIn: "30d" },
    );

    res.json({ token });
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
