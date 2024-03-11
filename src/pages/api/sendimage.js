// import fs from "fs";
// import path from "path";

// export default function handler(req, res) {
//   const { imagename, folder } = req.query;

//   if (!imagename) {
//     res.status(400).end("Image name not provided");
//     return;
//   }

//   const imagePath = path.join(process.cwd(), "src", folder, imagename);

//   fs.readFile(imagePath, (err, data) => {
//     if (err) {
//       console.error("Error reading image:", err);
//       res.status(500).end("Internal Server Error");
//       return;
//     }

//     console.log("Image successfully read:", imagename);
//     res.setHeader("Content-Type", "image/png");
//     res.end(data);
//   });
// }

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { imagename, folder } = req.query;

  if (!imagename || !folder) {
    res.status(400).end("Image name or folder not provided");
    return;
  }

  const imagePath = path.join(process.cwd(), "src", folder, imagename);

  // Check if the file exists before attempting to read it
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("Error accessing image:", err);
      res.status(404).end("Image not found");
      return;
    }

    // If the file exists, read it and send it in the response
    fs.readFile(imagePath, (readErr, data) => {
      if (readErr) {
        console.error("Error reading image:", readErr);
        res.status(500).end("Internal Server Error");
        return;
      }

      console.log("Image successfully read:", imagename);
      res.setHeader("Content-Type", "image/png");
      res.end(data);
    });
  });
}

