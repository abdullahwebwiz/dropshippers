import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { imagename, folder } = req.query;

  if (!imagename) {
    res.status(400).end("Image name not provided");
    return;
  }

  const imagePath = path.join(process.cwd(), "src", folder, imagename);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error("Error reading image:", err);
      res.status(500).end("Internal Server Error");
      return;
    }

    console.log("Image successfully read:", imagename);
    res.setHeader("Content-Type", "image/png");
    res.end(data);
  });
}
