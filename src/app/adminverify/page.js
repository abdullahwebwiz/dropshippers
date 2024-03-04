"use client";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./page.module.css";

const Page = () => {
  let [adminName, setAdminName] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminName && password) {
    } else {
      alert("Fill All fields.");
    }
  };
  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.title}>Welcome Admin</div>
        <TextField id="standard-basic" label="Admin Name" variant="standard" />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default Page;
