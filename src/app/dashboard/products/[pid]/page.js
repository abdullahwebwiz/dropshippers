"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import MyImage from "@/components/myimage/myimage";
import { Button } from "@mui/material";
import { data2 } from "@/data/data2";
import Image from "next/image";
const Page = (props) => {
  let [data, setData] = useState(null);

  let pid = props.params.pid;
  React.useEffect(() => {
    if (pid) {
      fetch(data2.production + "/api/products/getproduct/" + pid)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  }, [pid]);

  return (
    <div className={style.main}>
      {data ? (
        <div className={style.con}>
          <div className={style.title}>{data.title}</div>
          <div className={style.cat}>{data.category}</div>
          <div className={style.des}>{data.Description}</div>
          <div className={style.price}>{"PKR " + " " + data.price}</div>
          <Link href={data.video} className={style.video}>
            {"Download Video: " + data.video}
          </Link>
          <div className={style.imgcon}>
            <Image
              src={
                "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/productimages/" +
                data.p_id +
                "0.png"
              }
              width={200}
              height={200}
              alt={"my image"}
            />
            <Image
              src={
                "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/productimages/" +
                data.p_id +
                "1.png"
              }
              width={200}
              height={200}
              alt={"my image"}
            />
            <Image
              src={
                "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/productimages/" +
                data.p_id +
                "2.png"
              }
              width={200}
              height={200}
              alt={"my image"}
            />
            <Image
              src={
                "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/productimages/" +
                data.p_id +
                "3.png"
              }
              width={200}
              height={200}
              alt={"my image"}
            />
            <Image
              src={
                "https://zlqi1znpfydrhxa5.public.blob.vercel-storage.com/productimages/" +
                data.p_id +
                "4.png"
              }
              width={200}
              height={200}
              alt={"my image"}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Page;
