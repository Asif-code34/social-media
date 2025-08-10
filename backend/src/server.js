import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
const app = express();
connectDB();

app.get("/", (req, res) => res.send("hello from the server"));

app.listen(ENV.PORT, () => {
  console.log("server started ");
});
