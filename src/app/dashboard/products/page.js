"use client";
import Space from "@/components/space/space";
import Header from "../header";
import style from "./page.module.css";
import React, { useState } from "react";
import ProductCard from "@/components/productcard/productcard";
import x from "../../../productimages/5nyjdxaheb0.png";
import Image from "next/image";
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
  return (
    <div>
      <Header />
      <Space />
      <div className={style.con}>
        <img
          src={"../../../productimages/5nyjdxaheb0.png"}
        />
      </div>
    </div>
  );
};
export default Page;
