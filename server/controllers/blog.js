import { db } from "../db.js";

export const getBlogs = (req, res) => {
  //getting all blog, so where ever we see category it will fetch that blog, and the cat = ? comes from frontend url, when we click on categories
  const q = req.query.cat
    ? "SELECT * FROM blogs WHERE cat=?"
    : "SELECT * FROM blogs";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.send(500).json(err);

    return res.send(200).json(data);
  });
};

export const getBlog = (req, res) => {
  res.json("Blog Coming from controller");
};

export const addBlog = (req, res) => {
  res.json("Blog Coming from controller");
};

export const deleteBlog = (req, res) => {
  res.json("Blog Coming from controller");
};

export const updateBlog = (req, res) => {
  res.json("Blog Coming from controller");
};
