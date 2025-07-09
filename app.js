import express from "express";
import cors from "cors";
import multer from "multer";
import postureRoutes from "./routes/postureRoutes.js";

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));


app.use(express.json());
app.use("/api/posture", postureRoutes);

app.get("/api/test", (req, res) => {
  res.json({ message: "API working fine!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
