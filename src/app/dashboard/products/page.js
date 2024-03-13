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
import { useRouter } from "next/navigation";
import { data2 } from "@/data/data2";
const Page = () => {
  let [rows, setRows] = useState(null);
  let [des, setDes] = useState("");
  let [cat, setCat] = useState("");
  let [video, setvideo] = useState("");
  let [pid, setpid] = useState("");

  React.useEffect(() => {
    fetch(data2.production+"/api/products/getproducts")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  let router = useRouter();

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
                      router.push("/dashboard/products/" + d.p_id);
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
    </>
  );
};
export default Page;
