import express from "express";
import blogRoutes from "./routes/blogs.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser()); // middleware which parses cookies attached to the client request object. session management
app.use("/server/auth", authRoutes);
app.use("/server/users", userRoutes);
app.use("/server/blogs", blogRoutes);

app.listen(8000, () => {
  console.log("Server is up and running ");
});
