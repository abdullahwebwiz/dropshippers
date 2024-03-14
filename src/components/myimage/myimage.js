"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { data2 } from "@/data/data2";
const MyImage = ({ folder, name, width, height, alt }) => {
  return (
    <>
      {name ? (
        <Image
          src={
            "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/" +
            folder +
            name
          }
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
