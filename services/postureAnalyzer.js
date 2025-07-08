export const analyzeVideoBuffer = async (buffer) => {
  // Random frames between 1 and 5
  const randomFrameCount = Math.floor(Math.random() * 3) + 2; // 2–4 frames

  const issues = [
    "Neck bent between 60–80°",
    "Back angle <150°",
    "Knee over toe",
    "Head too forward",
    "Shoulders not aligned"
  ];

  // Randomly pick frames and issues
  const frames = Array.from({ length: randomFrameCount }, (_, i) => ({
    frame: i + 1,
    issue: issues[Math.floor(Math.random() * issues.length)]
  }));

  // Summary message
  const summary = `${randomFrameCount} frames flagged for bad posture (Neck angle mostly 60–80°).`;

  return {
    summary,
    frames
  };
};
