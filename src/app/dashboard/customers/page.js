"use client";
import style from "./page.module.css";
import React, { useState } from "react";
import Header from "../header";
import Cookies from "js-cookie";
import { Button } from "@mui/material";
import Link from "next/link";
const Page = () => {
  let [rows, setRows] = useState(null);
  const d_id = Cookies.get("d_id");
  React.useEffect(() => {
    if (d_id) {
      fetch("http://localhost:3000/api/customers/getcustomersfew/" + d_id)
        .then((response) => response.json())
        .then((data) => {
          setRows(data);
          console.log(data.length);
        });
    }
  }, [d_id]);

  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "gray",
          fontSize: "25px",
          fontWeight: "700",
          marginTop: "10px",
        }}
      >
        Ctrl + F
      </div>
      <div className={style.con}>
        {!rows
          ? "plz wait..."
          : rows.length != 0
          ? rows.map((data, index) => {
              return (
                <div className={style.card} key={data.c_id}>
                  <div>Customer_ID: {data.c_id}</div>
                  <div>{data.name}</div>
                  <div>{data.city}</div>
                  <div>{data.address}</div>
                  <div>{data.phone}</div>
                </div>
              );
            })
          : "no customers yet. Click add to add your customers"}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link href={"/dashboard/customers/addcustomer"}>
          {" "}
          <Button variant="contained">Add New</Button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
