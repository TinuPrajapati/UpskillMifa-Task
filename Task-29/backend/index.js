const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

// Configure multer to store the uploaded video in the 'uploads/' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Upload video route
app.post("/upload-video", upload.single("video"), (req, res) => {
  const video = req.file;
  if (!video) {
    return res.status(400).send({ message: "No video uploaded" });
  }

  res.status(200).json({
    message: "Video uploaded successfully",
    videoPath: video.filename,
  });
});

// Stream video route
app.get("/video/:filename", (req, res) => {
  const videoPath = path.join(__dirname, 'uploads', req.params.filename);

  // Check if the file exists
  fs.stat(videoPath, (err, stats) => {
    if (err) {
      return res.status(404).send("Video not found");
    }

    // Get the range from the request headers
    const range = req.headers.range;
    if (!range) {
      return res.status(400).send("Requires Range header");
    }

    // Get video size and range details
    const videoSize = stats.size;
    const CHUNK_SIZE = 10 ** 6; // 1MB chunk size
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    // Send headers and stream the video
    res.writeHead(206, headers);

    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
