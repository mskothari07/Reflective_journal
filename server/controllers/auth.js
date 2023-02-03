import { db } from "../db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // Checking for user
  const q = "SELECT * FROM users WHERE email = ? OR username = ? ";

  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User Already Exists"); //409 - conflict in resource, updating the things which already exists

    // Password Encryption using bcryptjs

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //inserting user to database

    const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("Account Created Successfully"); // 200 - successful
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
