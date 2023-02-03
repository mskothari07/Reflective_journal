import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//register api
export const register = (req, res) => {
  // Checking for user
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";

  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User Already Exists"); //409 - conflict in resource, updating the things which already exists

    // Password Encryption using bcryptjs

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt); // Store hash in our password DB.

    //inserting user to database

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Account Created Successfully"); // 200 - successful
    });
  });
};

//login api
export const login = (req, res) => {
  //Checking for user account

  const q = "SELECT * FROM users WHERE username = ? ";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User doesn't exists");

    //Password matching
    // Load hash from our password DB.
    const isPasswordRight = bcrypt.compareSync(
      req.body.password,
      data[0].password
    ); // data returns a array so "0" will do for the first item of array which is user

    if (!isPasswordRight) return res.status(400).json("Incorrect Details");

    const token = jwt.sign({ id: data[0].id }, "jwtkey"); //sending unique id, for identifying user...storing this token in our browser cookie
    const { password, ...other } = data[0]; //separating password from data, as i don't want to send password

    res
      .cookie("unlock_token", token, {
        httpOnly: true, //to prevent client-side scripts from accessing data
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("unlock_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User Logged Out");
};
