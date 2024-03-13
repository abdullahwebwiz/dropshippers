"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { data2 } from "@/data/data2";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Page = () => {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  let router = useRouter();
  const handleSubmit = async () => {
    const { phone, password } = formData;
    if (!phone || !password) {
      Swal.fire({
        title: "All fields are required",
        text: "Please fill in all the fields",
        icon: "error",
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("phone", phone);
    formDataToSend.append("password", password);

    try {
      console.log(formDataToSend);
      const response = await fetch(data2.production + "/api/dropshippers/login", {
        method: "POST",
        body: formDataToSend,
      });
      const result = await response.json();
      console.log(response);
      console.log(result);
      if (result.msg == "success") {
        Cookies.set("d_id", result.d_id, { expires: 3 });
        Swal.fire({
          title: "Form Submitted",
          text: "Your form has been submitted successfully",
          icon: "success",
        }).then((result) => {
          if (
            result.isConfirmed ||
            result.dismiss === Swal.DismissReason.close
          ) {
            router.push("/");
          }
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit form. Check phone & password.",
        icon: "error",
      });
    }
  };

  return (
    <div className={style.main}>
      <div className={style.form}>
        <div className={style.title}>Sign Up to Continue</div>
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "purple", marginBottom: "15px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Page;
