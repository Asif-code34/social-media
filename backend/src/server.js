import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

app.listen(5001, () => {
  console.log("server started");
});
