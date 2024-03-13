"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Link from "next/link";
import MyImage from "@/components/myimage/myimage";
import { Button } from "@mui/material";
import { data2 } from "@/data/data2";
const Page = (props) => {
  let [data, setData] = useState(null);
  let [download, setdownload] = useState(false);
  let pid = props.params.pid;
  React.useEffect(() => {
    if (pid) {
      fetch(data2.production+"/api/products/getproduct/" + pid)
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
            <MyImage
              name={data.p_id + "0" + ".png"}
              folder={"productimages"}
              width={200}
              height={200}
              alt={"my image"}
              download={download}
              downname={data.title + "0"}
            />
            <MyImage
              name={data.p_id + "1" + ".png"}
              folder={"productimages"}
              width={200}
              height={200}
              alt={"my image"}
              download={download}
              downname={data.title + "1"}
            />
            <MyImage
              name={data.p_id + "2" + ".png"}
              folder={"productimages"}
              width={200}
              height={200}
              alt={"my image"}
              download={download}
              downname={data.title + "2"}
            />
            <MyImage
              name={data.p_id + "3" + ".png"}
              folder={"productimages"}
              width={200}
              height={200}
              alt={"my image"}
              download={download}
              downname={data.title + "3"}
            />
            <MyImage
              name={data.p_id + "4" + ".png"}
              folder={"productimages"}
              width={200}
              height={200}
              alt={"my image"}
              download={download}
              downname={data.title + "4"}
            />
          </div>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setdownload(true);
            }}
          >
            Download Images
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Page;
