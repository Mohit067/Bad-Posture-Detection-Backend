import express from "express";
import cors from "cors";
import multer from "multer";
import postureRoutes from "./routes/postureRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/posture", postureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
