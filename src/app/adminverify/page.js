"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./page.module.css";
import { apiCall } from "@/utils/apicall";
import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";

const Page = () => {
  let router = useRouter();
  let [adminName, setAdminName] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (adminName && password) {
      const url = "http://localhost:3000/api/adminverify";
      const method = "POST";
      const body = {
        admin: adminName,
        password: password,
      };
      try {
        const data = await apiCall(url, method, body);
        console.log(data);
        if (data) {
          Cookies.set("adminid", data.adminid, { expires: 1 });
          Cookies.set("admin", data.admin, { expires: 1 });
          router.push("/admin");
        } else {
          alert("Something is wrong");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something is wrong");
      }
    } else {
      alert("Something is wrong");
    }
  };
  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.title}>Welcome Admin</div>
        <TextField
          id="standard-basic"
          label="Admin Name"
          variant="standard"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Page;
