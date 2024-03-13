"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
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

const Page = (content) => {
  let p_id = content.params.p_id;
  console.log(p_id);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    video: "",
    Description: "",
    status: "",
  });
  useEffect(() => {
    console.log("api calling!!!");
    fetch(data2.production+"/api/products/getproduct/" + p_id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFormData(data);
      });
  }, [p_id]);

  const handleSubmit = async () => {
    const { title, price, video, Description, status } = formData;
    if (!title || !price || !video || !Description || !status) {
      Swal.fire({
        title: "All fields are required",
        text: "Please fill in all the fields",
        icon: "error",
      });
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("title", title);
    formDataToSend.append("status", status);
    formDataToSend.append("price", price);
    formDataToSend.append("video", video);
    formDataToSend.append("Description", Description);
    formDataToSend.append("p_id", p_id);

    try {
      console.log(formDataToSend);
      const response = await fetch(
        data2.production+"/api/products/updateproduct/",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      console.log(response);
      if (response.ok) {
        // setFormData({
        //   name: "",
        //   price: "",
        //   videoLink: "",
        //   description: "",
        //   images: [],
        // });

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
          <div className={style.title}>Add New Product</div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Video Link"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.video}
            onChange={(e) =>
              setFormData({ ...formData, video: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.Description}
            onChange={(e) =>
              setFormData({ ...formData, Description: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.status}
            placeholder="active or unactive"
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
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
