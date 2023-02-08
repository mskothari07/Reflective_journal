import express from "express";
import {
  addBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", addBlog);
router.delete("/:id", deleteBlog);
router.put("/:id", updateBlog);

export default router;
