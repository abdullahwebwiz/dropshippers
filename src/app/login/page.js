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
    password
  });
  let router = useRouter();
  const handleSubmit = async () => {
    const { name, phone, province, city, address } = formData;
    if (!name || !phone || !province || !city || !city) {
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
    formDataToSend.append("province", province);
    formDataToSend.append("city", city);
    formDataToSend.append("address", address);

    try {
      console.log(formDataToSend);
      const response = await fetch(
        "http://localhost:3000/api/dropshippers/adddropshipper",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      const result = await response.json();
      console.log(response);
      console.log(result);
      if (response.ok) {
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
        text: "Failed to submit form. Please try again later.",
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
          label="Name"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          placeholder="03000000000"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <TextField
          id="outlined-basic"
          label="Province"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.province}
          onChange={(e) =>
            setFormData({ ...formData, province: e.target.value })
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
          label="address"
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
