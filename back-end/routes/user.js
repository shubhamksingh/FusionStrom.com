const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC,
    ).toString();
  }
  try {
    var updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );
    const { password, ...userInfo } = updatedUser._doc;

    return res.status(201).json(userInfo);
  } catch (e) {
    res.status(500).json(e);
  }

  // res.status(201).json(updatedUser);
});

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    var deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    var user = await User.findById(req.params.id);

    const { password, ...userInfo } = user._doc;

    return res.status(201).json(userInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    const users = query
      ? await User.find({}, { password: 0 })
          .sort({ _id: -1 })
          .limit(1)
      : await User.find({}, { password: 0 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get User Stats

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const d = new Date();
  console.log(d);
  const lastYear = new Date(d.setFullYear(d.getFullYear() - 1));
  console.log(lastYear);
  // console.log(date);
  // console.log(lastYear);
  console.log("hahahaha prev");
  try {
    console.log("inside");
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      { $group: { _id: "$month", total: { $sum: 1 } } },
      { $sort : {_id : 1}}
    ]);
    console.log(data);
    console.log("hahaha");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
