import { db } from "../db.js";
import jwt from "jsonwebtoken";

//all blogs
export const getBlogs = (req, res) => {
  //getting all blog, so where ever we see category it will fetch that blog, and the cat = ? comes from frontend url, when we click on categories
  const q = req.query.cat
    ? "SELECT * FROM blogs WHERE cat=?"
    : "SELECT * FROM blogs";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.json(data);
  });
};

//getting blog
export const getBlog = (req, res) => {
  // find post using id
  const q =
    "SELECT b.id,  `username`, `title`, `desc`, b.img, `cat`, `date` FROM users u JOIN blogs b ON u.id = b.userid WHERE b.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data[0]);
  });
};

//add blog
export const addBlog = (req, res) => {
  const token = req.cookies.unlock_token;
  if (!token) return res.status(401).json("No token");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(404).json("Invalid Token");

    const q =
      "INSERT INTO blogs(`title`, `desc`, `img`, `cat`, `date`, `userid`) VALUES (?) ";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Blog added");
    });
  });
};

//delete blog
export const deleteBlog = (req, res) => {
  //token check
  const token = req.cookies.unlock_token;
  if (!token) return res.status(401).json("No token");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(404).json("Invalid Token");

    const blogId = req.params.id;
    const q = "DELETE FROM blogs WHERE `id` = ? AND `userid`= ?";

    db.query(q, [blogId, userInfo.id], (err, data) => {
      if (err)
        return res.status(404).json("You do not have access to delete it ");

      return res.json("DELETED");
    });
  });
};

//update Blog
export const updateBlog = (req, res) => {
  const token = req.cookies.unlock_token;
  if (!token) return res.status(401).json("No token");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(404).json("Invalid Token");

    const blogId = req.params.id;
    const q =
      "UPDATE blogs SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id` =? AND `userid` =?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    db.query(q, [...values, blogId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Blog Updated");
    });
  });
};
