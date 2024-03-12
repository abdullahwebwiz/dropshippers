// pages/api/pdf.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { imagename } = req.query;
  const filePath = path.resolve(
    process.cwd(),
    "src",
    "orderimages",
    imagename + ".pdf"
  );
  const stat = fs.statSync(filePath);

  res.setHeader("Content-Length", stat.size);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=myfile.pdf");

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
}
