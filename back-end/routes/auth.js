const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')
//REGISTER

router.post("/register", async (req, res) => {
  try {
    const savedUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC,
      ).toString(),
    });
    res.status(201).json(savedUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(e.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(
      CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    );
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json('Wrong credentials');
    // console.log(user);
    // console.log(user.password);
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC,
    );
    // console.log(hashedPassword);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword != req.body.password && res.status(401).json("invalid credentials");
    console.log(user);

    const accessToken =  jwt.sign({
        id : user._id,
        isAdmin: user.isAdmin
    }, process.env.JWT_SEC,
    {expiresIn : '3d'})




    const { password, ...userInfo } = user._doc;
    //  console.log(user);


    return  res.status(201).json({...userInfo, accessToken});

    // return res.status(500).json("invalid credentials");
    // res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(e.message);
  }
});

module.exports = router;
