import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

const app = express();
console.log("object");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.db_user_name}:${process.env.db_pass}@cluster0.doqdeku.mongodb.net/real_state_mern?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("server is running on port =>", port);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
