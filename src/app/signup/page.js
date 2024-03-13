"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import style from "./page.module.css";
import { data1 } from "@/data/data1"; // Importing the data1 object from data.js
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
    province: "",
    city: "",
    address: "",
    password: "",
  });
  const router = useRouter();
  const d_id = Cookies.get("d_id");

  React.useEffect(() => {
    if (d_id) {
      fetch(data2.production+"/api/dropshippers/getdropshipper/" + d_id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [d_id]);

  const handleSubmit = async () => {
    const { name, phone, province, city, address, password } = formData;
    if (!name || !phone || !province || !city || !city || !password) {
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
    formDataToSend.append("password", password);

    try {
      console.log(formDataToSend);
      const response = await fetch(
        data2.production+"/api/dropshippers/adddropshipper",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
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
        Swal.fire({
          title: "Error",
          text: "Failed to submit form. Please try again later.",
          icon: "error",
        });
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

  const handleProvinceChange = (event) => {
    setFormData({ ...formData, province: event.target.value, city: "" });
  };

  const handleCityChange = (event) => {
    setFormData({ ...formData, city: event.target.value });
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
          id="outlined-select-province"
          select
          label="Province"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.province}
          onChange={handleProvinceChange}
        >
          {data1.provinces.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-city"
          select
          label="City"
          variant="outlined"
          style={{ width: "95%" }}
          value={formData.city}
          onChange={handleCityChange}
        >
          {data1[formData.province]?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
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
        <TextField
          type="password"
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
