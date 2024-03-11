"use client";
import React, { useEffect, useState } from "react";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"; // Import MUI components
import { format } from "date-fns";
// import Button from "@mui/material";
import {Button} from "@mui/material";

const Page = () => {
  let [rows, setRows] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/generalorders/getordersall")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>DropShipper ID</TableCell>
                <TableCell>Customer ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Update Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.d_id}</TableCell>
                    <TableCell>{row.c_id}</TableCell>
                    <TableCell>{row.p_id}</TableCell>
                    <TableCell>{row.p_quantity}</TableCell>
                    <TableCell>
                      {format(new Date(Number(row.epoch)), "MM/dd/yyyy")}
                    </TableCell>
                    <TableCell>
                      {format(new Date(Number(row.epoch)), "hh:mm a")}
                    </TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                        <Button variant="contained" color="primary">Update</Button></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Page;
