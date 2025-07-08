import { analyzeVideoBuffer } from "../services/postureAnalyzer.js";

export const analyzePosture = async (req, res) => {
  try {
    const buffer = req.file.buffer;
    const result = await analyzeVideoBuffer(buffer);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing video" });
  }
};
