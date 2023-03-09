import express from "express";
import blogRoutes from "./routes/blogs.js";
import authRoutes from "./routes/auth.js";

import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser()); // middleware which parses cookies attached to the client request object. session management

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/my-app/public/upload");
  },
  filename: function (req, file, cb) {
    //if the image with same name uploads twice it will overwrite so i have added date in name so every time it will create a unique name
    cb(null, Date.now() + file.originalname);
  },
});
//Image Upload middleware using multer
const upload = multer({ storage });

app.post("/server/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/server/auth", authRoutes);

app.use("/server/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("Server is up and running ");
});
