"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { data2 } from "@/data/data2";
const MyImage = ({
  folder,
  name,
  width,
  height,
  alt,
  style,
  download,
  downname,
}) => {
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    async function getImage() {
      const imageName = "7kyfno2ai80.png"; // Change this to your desired image name
      const res = await fetch(
        `${data2.production}/api/sendimage?imagename=${name}&folder=${folder}`
      );
      console.log(res);
      if (res.ok) {
        const imageBuffer = await res.arrayBuffer();

        const base64 = Buffer.from(imageBuffer).toString("base64");
        setImageData(base64);
      } else {
        setImageData(null);
      }
    }
    getImage();
  }, []);

  useEffect(() => {
    if (download && imageData) {
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = `data:image/png;base64,${imageData}`;
        link.download = `${downname}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      handleDownload();
    }
  }, [download, imageData]);

  return (
    <>
      {imageData ? (
        <Image
          src={"data:image/png;base64," + imageData}
          width={width}
          height={height}
          alt={alt}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default MyImage;
