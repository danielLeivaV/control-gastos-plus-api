import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

// middlewares
app.use(express.json());

// conectar a MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API funcionandooo 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
