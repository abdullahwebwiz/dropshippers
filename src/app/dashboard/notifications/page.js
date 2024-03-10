"use client";
import style from "./page.module.css";
import Header from "../header";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
const Page = () => {
  let [rows, setrows] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/api/notifications/getnotifications")
      .then((response) => response.json())
      .then((data) => {
        setrows(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className={style.con}>
        {rows
          ? rows.map((d, i) => {
              return (
                <div className={style.card} key={i}>
                  <div className={style.text}>{d.text}</div>
                  <Link
                    href={d.link}
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Button variant="contained" size="small">
                      Learn More
                    </Button>
                  </Link>
                </div>
              );
            })
          : "wait..."}
      </div>
    </div>
  );
};

export default Page;
