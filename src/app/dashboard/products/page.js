"use client";
import Space from "@/components/space/space";
import Header from "../header";
import style from "./page.module.css";
import React, { useState } from "react";
import ProductCard from "@/components/productcard/productcard";
import ImageComponent from "@/components/imagecomponent/imagecomponent";
const Page = () => {
  let [rows, setRows] = useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/products/getproducts")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);
  const imageArray = ["5nyjdxaheb0", "7kyfno2ai80", "7kyfno2ai81"];
  return (
    <div>
      <Header />
      <Space />
      <div className={style.con}>
        <ImageComponent imageName={imageArray} />;
      </div>
    </div>
  );
};
export default Page;
