const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

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
    console.log(user);
    console.log(user.password);
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC,
    );
    console.log(hashedPassword);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    originalPassword != req.body.password && res.status(401).send("invalid");

    const { password, ...others } = user._doc;
    //  console.log(user);
    return  res.status(201).send(others);

    // return res.status(500).json("invalid credentials");
    // res.status(201).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(e.message);
  }
});

module.exports = router;
