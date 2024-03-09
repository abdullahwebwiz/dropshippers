"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

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

let category = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Beauty & Personal Care",
  "Books",
  "Toys & Games",
  "Health & Wellness",
  "Sports & Outdoors",
  "Pet Supplies",
  "Automotive"
];

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    videoLink: "",
    description: "",
    category: "",
    images: [],
  });

  const handleSubmit = async () => {
    const { name, price, videoLink, description, images, category } = formData;
    if (
      !name ||
      !price ||
      !videoLink ||
      !description ||
      !category ||
      images.length === 0
    ) {
      Swal.fire({
        title: "All fields are required",
        text: "Please fill in all the fields",
        icon: "error",
      });
      return;
    }

    if (images.length < 1 || images.length > 5) {
      Swal.fire({
        title: "Invalid number of images",
        text: "Please upload between 1 and 5 images",
        icon: "error",
      });
      return;
    }

    const formDataToSend = new FormData();

    formDataToSend.append("name", name);
    formDataToSend.append("price", price);
    formDataToSend.append("videoLink", videoLink);
    formDataToSend.append("description", description);
    formDataToSend.append("category", category);
    images.forEach((image, index) => {
      formDataToSend.append(`image${index}`, image);
    });

    try {
      console.log(formDataToSend);
      const response = await fetch(
        "http://localhost:3000/api/products/addproduct",
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

  const handleFileChange = (event) => {
    const files = event.target.files;
    const selectedImages = [];

    for (let i = 0; i < files.length; i++) {
      if (files[i].type === "image/png") {
        selectedImages.push(files[i]);
      }
    }

    setFormData({ ...formData, images: selectedImages });
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
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            value={formData.videoLink}
            onChange={(e) =>
              setFormData({ ...formData, videoLink: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              accept="image/png"
              multiple
            />
          </Button>

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
