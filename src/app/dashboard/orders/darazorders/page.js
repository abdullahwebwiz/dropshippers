"use client";
import React, { useState } from "react";
import style from "./page.module.css";
import Header from "../../header";
import Cookies from "js-cookie";
import {
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import { data2 } from "@/data/data2";
const Page = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [shippingLabel, setShippingLabel] = useState(null);
  const [paymentReceipt, setPaymentReceipt] = useState(null);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rows, setRows] = useState(null);

  let d_id = Cookies.get("d_id");

  React.useEffect(() => {
    if (d_id) {
      fetch(data2.production+"/api/darazorders/getorders/" + d_id) 
        .then((response) => response.json())
        .then((data) => {
          setRows(data);
          console.log(data);
        });
    }
  }, [d_id]);

  const handleAddOrderClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = () => {
    // Check if any required fields are empty
    if (!shippingLabel || !paymentReceipt || !productId || !quantity || !d_id) {
      alert("Please fill in all fields.");
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("shippingLabel", shippingLabel);
    formData.append("paymentReceipt", paymentReceipt);
    formData.append("productId", productId);
    formData.append("quantity", quantity);
    formData.append("d_id", d_id);

    // Send POST request
    fetch(data2.production+"/api/darazorders/addorder", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response
        if (response.ok) {
          alert("Order added successfully!");
          location.reload();
          setIsFormOpen(false);
        } else {
          alert("Failed to add order. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error adding order:", error);
        alert("An error occurred. Please try again.");
      });
  };

  const handleShippingLabelChange = (event) => {
    setShippingLabel(event.target.files[0]);
  };

  const handlePaymentReceiptChange = (event) => {
    setPaymentReceipt(event.target.files[0]);
  };

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className={style.con}>
        {rows && rows.length != 0
          ? rows.map((d, i) => {
              console.log(d.epoch);
              const formattedDate = format(
                parseInt(d.epoch),
                "dd MMMM yyyy"
              );
              const formattedTime = format(
                parseInt(d.epoch),
                "hh:mm a"
              );
              return (
                <div className={style.card} key={i}>
                  <div>Order_ID: {d.o_id}</div>
                  <div>{formattedDate}</div>
                  <div>{formattedTime}</div>
                  <Chip label={d.status} color="secondary" variant="outlined" />
                </div>
              );
            })
          : "No Orders Or some error"}
      </div>
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <Button variant="contained" onClick={handleAddOrderClick}>
          Add Order
        </Button>
      </div>
      <Dialog open={isFormOpen} onClose={handleCloseForm}>
        <DialogTitle>Add Order</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Please fill in the following details and upload the files:
          </Typography>
          <TextField
            label="Product ID"
            type="text"
            fullWidth
            required
            value={productId}
            onChange={handleProductIdChange}
            margin="normal"
          />
          <TextField
            label="Quantity"
            type="number"
            fullWidth
            required
            value={quantity}
            onChange={handleQuantityChange}
            margin="normal"
          />
          <TextField
            label="Shipping Label (PDF)"
            type="file"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            InputProps={{
              inputProps: {
                accept: ".pdf",
              },
            }}
            onChange={handleShippingLabelChange}
            margin="normal"
          />
          <TextField
            label="Payment Receipt Screenshot"
            type="file"
            InputLabelProps={{ shrink: true }}
            fullWidth
            required
            InputProps={{
              inputProps: {
                accept: "image/*",
              },
            }}
            onChange={handlePaymentReceiptChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Page;
