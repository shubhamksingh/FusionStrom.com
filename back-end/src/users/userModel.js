const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, minLength:6, maxLength: 20, required: true },
  role: { type: String, required: true, enum: ["admin", "client", "employee"] }
  
 // weldone  ;djfdjfsakl;
});

const User = mongoose.model("user", userSchema);
module.exports = User;
