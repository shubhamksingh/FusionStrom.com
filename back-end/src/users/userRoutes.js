const express = require("express");
const User = require("./Users.model");
const app = express.Router();

// const authMiddleware = async (req, res, next) => {
//   try {
//     let { token } = req.headers;
//     console.log(token);
//     //  res.send(typeof token);
//     if (!token) res.status(401).send("no token provided");
//     const [id, email, password, role] = token.split(":");
//     if (!id || !email || !password || !role) {
//       res
//         .status(401)
//         .send("User not allowed to access Because of lack of authentication");
//     }

//     let user = await User.findById(id);
//     console.log(user);
//     if (user.email == email && user.password == password) {
//       next();
//     } else res.status(401).send("No authentication");
//   } catch (e) {
//     res.status(400).send(e.message);
//     console.log("haha");
//   }
// };

// app.get("/", async (req, res) => {
//   // console.log('ahahahah');
//   try {
//     let { r } = req.query;
//     if (r != undefined) {
//       if (["admin", "employee", "client"].includes(r)) {
//         let foundUsers = await User.find({ role: r }, { password: 0 });
//         res.status(200).send(foundUsers);
//       } else {
//         res.status(400).send("No such user role exists");
//       }
//     } else {
//       let allUsers = await User.find({}, { password: 0 });
//       res.send(allUsers);
//     }
//   } catch (e) {
//     res.status(401).send(e.message);
//   }
// });

// app.get("/:id", authMiddleware, async (req, res) => {
//   try {
//     let id = req.params.id;
//     let profile = await User.findById(id);
//     res.status(200).send(profile);
//   } catch (e) {
//     res.status(401).send(e.message);
//   }
// });


app.post("/login", async (req, res) => {
    const {email, password} =  req.body;
  
    const user = await User.findOne({email, password});
    if(!user){
      res.status(401).send("Invalid credentials")
    }
    else{
  
      const token = jwt.sign({id: user._id, name: user.name, email: user.email, role: user.role}, '1234', {expiresIn: '5 minutes'});
  
      res.status(200).send({message: "Login success", token});
  
    }
  












app.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).send("Authentication failed");
    }

    res.send({
      token: `${user._id}:${user.email}:${user.password}:${user.role}`,
      name: user.username,
      id: user._id,
    });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// app.post("/signup", async (req, res) => {
//   try {
//     let { email } = req.body;
//     let user = await User.findOne({ email });
//     if (user) {
//       return res
//         .status(404)
//         .send(
//           "Cannot create a user with existing email address, trying logging in using this email address",
//         );
//     }
//     let createdUser = await User.create(req.body);
//     res.send({
//       token: `${createdUser.id}:${createdUser.email}:${createdUser.password}:${
//         createdUser.role
//       }`,
//       name: createdUser.username,
//     });
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

//token
// userid
//http://localhost:8080/users/id

// app.patch("/:id", async (req, res) => {
//   try {
//     // let token = req.headers.token;
//     // let [userid, email, password, role] = token.split(":");
//     let id = req.params.id;
//     let updatedProfile = await User.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     // const newtoken = `${id}:${email}:${req.body.password}:${role}`;
//     res.status(200).send(updatedProfile);
//   } catch (e) {
//     res.status(401).send(e.message);
//   }
// });









module.exports = app;
