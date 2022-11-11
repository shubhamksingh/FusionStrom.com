const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String, reqired: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timeStamps: true },
);



module.exports = mongoose.model('user', userSchema);
