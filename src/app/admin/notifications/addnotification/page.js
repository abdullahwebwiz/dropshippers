"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

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
    text: "",
    link: "",
  });

  const handleSubmit = async () => {
    const { text, link } = formData;
    if (!text || !link) {
      Swal.fire({
        title: "All fields are required",
        text: "Please fill in all the fields",
        icon: "error",
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("text", text);
    formDataToSend.append("link", link);
    try {
      console.log(formDataToSend);
      const response = await fetch(
        data2.production+"/api/notifications/addnotification",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      console.log(response);
      if (response.ok) {
        setFormData({
          text: "",
          link: "",
        });

        Swal.fire({
          title: "Form Submitted",
          text: "Your form has been submitted successfully",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to submit form. Please try again later.",
          icon: "error",
        });
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit form. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
        <div className={style.form}>
          <div className={style.title}>Add New Notification</div>
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Link"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.link}
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
