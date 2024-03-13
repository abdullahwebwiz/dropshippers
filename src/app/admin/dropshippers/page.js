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
import { data2 } from "@/data/data2";
const Page = () => {
  let [rows, setRows] = useState(null);

  useEffect(() => {
    fetch(data2.production+"/api/dropshippers/getdropshippers")
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
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Province</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
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
