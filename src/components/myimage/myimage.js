"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const MyImage = ({ folder, name, width, height, alt, style }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function getImage() {
      const imageName = "7kyfno2ai80.png"; // Change this to your desired image name
      const res = await fetch(
        `http://localhost:3000/api/sendimage?imagename=${name}&folder=${folder}`
      );
      const imageBuffer = await res.arrayBuffer();
      const base64 = Buffer.from(imageBuffer).toString("base64");
      setImageData(base64);
    }
    getImage();
  }, []);

  return (
    <>
      {imageData ? (
        <Image
          src={"data:image/png;base64," + imageData}
          width={width}
          height={height}
          alt={alt}
          style={style}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default MyImage;
