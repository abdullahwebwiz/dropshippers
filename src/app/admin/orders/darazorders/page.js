import React from "react";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";

const Page = () => {
  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
      </div>
    </div>
  );
};

export default Page;
