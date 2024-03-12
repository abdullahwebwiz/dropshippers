import React from "react";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import Link from "next/link";
const Page = () => {
  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        <div className={style.button} style={{ backgroundColor: "#F85606" }}>
          <Link
            href={"/admin/orders/darazorders"}
            style={{ color: "white" }}
          >
            Daraz Orders
          </Link>
        </div>
        <div className={style.button} style={{ backgroundColor: "#96bf48" }}>
          <Link
            href={"/admin/orders/generalorders"}
            style={{ color: "white" }}
          >
            General Orders
          </Link>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Page;
