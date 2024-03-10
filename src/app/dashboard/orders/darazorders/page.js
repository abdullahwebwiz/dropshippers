"use client";
import { useState } from "react";
import style from "./page.module.css";
import Header from "../../header";
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

const Page = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [shippingLabel, setShippingLabel] = useState(null);
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  const handleAddOrderClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmit = () => {
    // Check if any required fields are empty
    if (!shippingLabel || !paymentReceipt) {
      alert("Please upload both files.");
      return;
    }

    // Create form data
    const formData = new FormData();
    formData.append("shippingLabel", shippingLabel);
    formData.append("paymentReceipt", paymentReceipt);

    // Send POST request
    fetch("/api/orders/addorders", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response
        if (response.ok) {
          alert("Order added successfully!");
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

  return (
    <div>
      <Header />
      <div className={style.con}>
        <div className={style.card}>
          <div>Order_ID: 123</div>
          <div>10 March 2024</div>
          <div>12:09 PM</div>
          <Chip label="processing" color="secondary" variant="outlined" />
        </div>
        <div className={style.card}>
          <div>Order_ID: 123</div>
          <div>10 March 2024</div>
          <div>12:09 PM</div>
          <Chip label="processing" color="secondary" variant="outlined" />
        </div>{" "}
        <div className={style.card}>
          <div>Order_ID: 123</div>
          <div>10 March 2024</div>
          <div>12:09 PM</div>
          <Chip label="processing" color="secondary" variant="outlined" />
        </div>{" "}
        <div className={style.card}>
          <div>Order_ID: 123</div>
          <div>10 March 2024</div>
          <div>12:09 PM</div>
          <Chip label="processing" color="secondary" variant="outlined" />
        </div>{" "}
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
            Please upload the following files:
          </Typography>
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
