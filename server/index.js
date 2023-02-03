import express from "express";
import blogRoutes from "./routes/blogs.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("Server is up and running ");
});
