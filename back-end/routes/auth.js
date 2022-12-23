const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')


// <<<<<<<<<<< REGISTER ROUTE >>>>>>>>>>>>>
router.post("/register", async (req, res) => {
  const { email } = req.body
  const UserExit = await User.findOne({ email })

  try {
    if (UserExit) {
      console.log("Email and Username already Exit")
     return res.send({message:"Email and Username already Exit"})
    }
//else
    const savedUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC,
      ).toString(),
    });
   return  res.status(201).send(savedUser);

  } catch (e) {
    console.log("error", e.message);
  return  res.status(500).send(e.message);
  }
});

// <<<<<<<<<<< LOGIN ROUTE >>>>>>>>>>>>>
router.post("/login", async (req, res) => {
  const {email} = req.body
  // console.log(CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString());
  const user = await User.findOne({ email: email },{password:0});
  try {
    if (!user) {
      console.log("Wrong credentials")
    return res.send({message:'Wrong credentials'});
    }

    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SEC, { expiresIn: '5 days' })

    // const { password, ...userInfo } = user._doc;

 return res.status(201).send({ user, accessToken });
   
  } catch (e) {
  console.log(e.message);
  return res.status(500).send(e.message);
}
});


module.exports = router;
