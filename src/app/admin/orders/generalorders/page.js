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
import { Button } from "@mui/material";
import TableRow1 from "@/components/tablerow1/tablerow1";

const Page = () => {
  let [rows, setRows] = useState(null);

  //___________________________________________________________________________
  useEffect(() => {
    fetch("http://localhost:3000/api/generalorders/getordersall")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  //___________________________________________________________________________
  //___________________________________________________________________________
  //___________________________________________________________________________
  //___________________________________________________________________________

  return (
    <div className={style.container}>
      f<AdminSideBar />
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
                  <TableRow1
                  oid={row.o_id}
                    did={row.d_id}
                    pid={row.p_id}
                    cid={row.c_id}
                    epoch={row.epoch}
                    status={row.status}
                    quantity={row.p_quantity}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Page;
