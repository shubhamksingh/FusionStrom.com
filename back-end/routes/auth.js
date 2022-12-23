const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
const argon2= require("argon2")

// <<<<<<<<<<< REGISTER ROUTE >>>>>>>>>>>>>
router.post("/register", async (req, res) => {
  const {email,password } = req.body
  const UserExit = await User.findOne({ email })

  try {
    if (UserExit) {
      console.log("User already Exit")
      return res.send({ message: "User already Exit" })
    }
    //else

    const hash = await argon2.hash(password);

    const savedUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hash
       
    });
    return res.status(201).send(savedUser);

  } catch (e) {
    console.log("error", e.message);
    return res.status(500).send(e.message);
  }
});

// <<<<<<<<<<< LOGIN ROUTE >>>>>>>>>>>>>
router.post("/login", async (req, res) => {
  const {email,password } = req.body

  const user = await User.findOne({email:email});
// console.log(user)

  try{
  if (user && await argon2.verify(user.password,password)) {
      
    const accessToken = jwt.sign({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SEC, { expiresIn: '5 days' })

    return res
        .status(201)
        .send({ message: "Login success",user,accessToken});
}
//else
return res.send("User Unauthorired");
  }
catch(e){
  console.log(e.message);
  return res.send(e.message);
}

 
});


module.exports = router;
