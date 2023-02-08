import { db } from "../db.js";
import jwt from "jsonwebtoken";

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

export const getBlog = (req, res) => {
  // find post using id
  const q =
    "SELECT `username`, `title`, `desc`, b.img, `cat`, `date` FROM users u JOIN blogs b ON u.id = b.userid WHERE b.id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data[0]);
  });
};

export const addBlog = (req, res) => {
  res.json("Blog Coming from controller");
};

export const deleteBlog = (req, res) => {
  const token = req.cookies.unlock_token;
  if (!token) return res.status(401).json("Not Valid");

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

export const updateBlog = (req, res) => {
  res.json("Blog Coming from controller");
};
