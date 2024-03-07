"use client";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";
import React from "react";


const Page = () => {
  let [rows, setRows] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/notifications/getnotifications")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  const deletenotification = (n_id) => {
    fetch("http://localhost:3000/api/notifications/deletenotification/" + n_id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.msg == "success") {
          Swal.fire({
            title: "Success",
            text: "Data successfully deleted",
            icon: "success",
          });
          location.reload();
        } else {
          Swal.fire({
            title: "Failed",
            text: "Something went wrong. Data not deleted",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
        <div className={style.con}>
          {rows
            ? rows.map((data) => {
                return (
                  <div
                    key={data.n_id}
                    style={{
                      width: "300px",
                      height: "300px",
                      boxShadow: "1px 1px 5px black",
                      borderRadius: "20px",
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div> {data.text}</div>
                    <Link href={data.link}>{data.link}</Link>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deletenotification(data.n_id)}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })
            : "Wait....."}
        </div>
        <div className={style.addbut}>
          <Link href={"/admin/notifications/addnotification"}>
            <Button variant="contained" color="primary">
              Add Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
