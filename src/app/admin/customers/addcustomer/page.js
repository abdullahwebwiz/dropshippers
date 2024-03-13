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

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
    reference: "admin",
  });

  const handleSubmit = async () => {
    const { name, phone, city, address } = formData;
    if (!name || !phone || !city || !address) {
      Swal.fire({
        title: "All fields are required",
        text: "Please fill in all the fields",
        icon: "error",
      });
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("phone", phone);
    formDataToSend.append("city", city);
    formDataToSend.append("address", address);
    formDataToSend.append("reference", 'admin');

    try {
      console.log(formDataToSend);
      const response = await fetch(
        data2.production+"/api/customers/addcustomer",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      console.log(response);
      if (response.ok) {
        setFormData({
          name: "",
          phone: "",
          city: "",
          address: "",
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
          <div className={style.title}>Add New Customer</div>
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
            label="Phone"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            style={{ width: "95%" }}
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
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
