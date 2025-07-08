import express from "express";
import multer from "multer";
import { analyzePosture } from "../controllers/postureController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/analyze", upload.single("video"), analyzePosture);

export default router;
