import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/tasks", taskRoute);

connectDB().then(() => {
  app.listen(3000, () => {
    console.log("Server bắt đầu chạy trên cổng 3000");
  });
});
