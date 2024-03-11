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
                <TableCell></TableCell>
                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {false &&
                rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.province}</TableCell>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.address}</TableCell>
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
