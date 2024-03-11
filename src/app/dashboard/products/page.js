"use client";
import Space from "@/components/space/space";
import Header from "../header";
import style from "./page.module.css";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/productcard/productcard";
import x from "../../../productimages/5nyjdxaheb0.png";
import Image from "next/image";
import MyImage from "@/components/myimage/myimage";
import Popup1 from "@/components/popup1/popup1";
const Page = () => {
  let [rows, setRows] = useState(null);
  let [des, setDes] = useState("");
  let [cat, setCat] = useState("");
  let [video, setvideo] = useState("");
  let [pid, setpid] = useState("");

  React.useEffect(() => {
    fetch("http://localhost:3000/api/products/getproducts")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${imageData}`;
    link.download = `${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {" "}
      <div>
        <Header />
        <Space />
        <div className={style.con}>
          {rows
            ? rows.map((d, i) => {
                return (
                  <span
                    key={d.p_id}
                    onClick={() => {
                      setDes(d.Description);
                      setvideo(d.video);
                      setpid(d.p_id);
                      setCat(d.category ? d.category : "No category");
                    }}
                  >
                    {" "}
                    <ProductCard
                      image={d.p_id + "0" + ".png"}
                      title={d.title}
                      category={d.category}
                      productId={d.p_id}
                      status={d.status}
                      price={d.price}
                    />
                  </span>
                );
              })
            : ""}
        </div>
      </div>
      {des ? (
        <Popup1
          description={des}
          category={cat}
          video={video}
          pid={pid}
          close={() => setDes("")}
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Page;
