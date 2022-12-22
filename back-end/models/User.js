const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String},
    email: { type: String, required: true, unique: true },
    password: { type: String, reqired: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);


module.exports = mongoose.model('user', userSchema);
