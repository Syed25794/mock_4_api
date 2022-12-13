const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { email, password, name } = req.body;
  const result = await User.findOne({ email });
  console.log(result);
  if (result) {
    res.send("User already exists. Please login...");
  } else {
    bcrypt.hash(password, 5, async (error, result) => {
      if (error) {
        res.send("Something went wrong. Please sign up later. ");
      } else {
        const token = jwt.sign({ name: "Syed" }, "syed25794");
        console.log(token);
        const user = new User({
          email,
          password: result,
          name,
        });
        await user.save();
        res.send("Signup Successfull");
      }
    });
  }
};

const loginUser = async (req, res) => {
  var { password, email } = req.body;
  const token = req.headers.authorization;
  if (token) {
    let decoded = jwt.verify(token, "syed25794");
    if (decoded) {
      res.send("Login Successfully.");
    } else {
      const result = await User.findOne({ email });
      console.log(result);
      bcrypt.compare(password, result.password, async (error, result) => {
        if (result) {
          res.send("Login Successfully.");
        } else {
          res.send("Invalid Credentials!");
        }
      });
    }
  } else {
    const { email, password } = req.body;
    const result = await User.findOne({ email });
    console.log(result);
    bcrypt.compare(password, result.password, async (error, result) => {
      if (result) {
        res.send("Login Successfully.");
      } else {
        res.send("Invalid Credentials!");
      }
    });
  }
};

const getUserProfile = async (req, res) => {
  const token = req.headers.authorization;
  const {email} = req.params;
  console.log(email);
  if (token) {
    const decoded = jwt.verify(token, "syed25794");
    if (decoded) {
      const profile = User.find({ email: email });
      console.log(profile);
      res.send("Found");
    } else {
      res.send("Please login first.");
    }
  } else {
    res.send("Please login first.");
  }
};

const calculateEMI = async (req, res) => {
  let { amount, interest, months } = req.body;
  interest /=1200;
  let  EMI= (amount * interest * ( 1 + interest )*months ) / ( ( 1 + interest ) * months - 1 ) ;
  let total_payable = EMI*months;
  let interest_total = total_payable- amount;
  const payload = {
    EMI,
    total_payable,
    interest_total
  };
  res.send(payload);
};

const logoutUser = async (req, res) => {
  req.headers.authorization=null;
  res.send("successfull");
};

module.exports = {
  logoutUser,
  calculateEMI,
  getUserProfile,
  registerUser,
  loginUser,
};
