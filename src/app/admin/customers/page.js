"use client";
import AdminSideBar from "@/components/adminsidebar/adminsidebar";
import style from "./page.module.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { apiCall } from "@/utils/apicall";
import { useEffect } from "react";
import { Button } from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";

function createData(Customer_ID, Name, Phone, City, Address, Delete) {
  return {
    Customer_ID,
    Name,
    Phone,
    City,
    Address,
    Delete,
  };
}

const Page = () => {
  let [rows, setRows] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/customers/getcustomers")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  const deleteCustomer = (c_id) => {
    fetch("http://localhost:3000/api/customers/deletecustomer/" + c_id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.msg == "success") {
          Swal.fire({
            title: "Success",
            text: "Data successfully deleted",
            icon: "success",
          });
          location.reload();
        } else {
          Swal.fire({
            title: "Failed",
            text: "Something went wrong. Data not deleted",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className={style.container}>
      <AdminSideBar />
      <div className={style.main}>
        {" "}
        {rows ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: "green" }}>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Customer ID
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Phone
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      City
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Address
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                      }}
                    >
                      Delete
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.c_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.c_id}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="right">
                        {
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteCustomer(row.c_id)}
                          >
                            Delete
                          </Button>
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div className={style.addbut}>
              <Link href={"/admin/customers/addcustomer"}>
                <Button variant="contained" color="primary">
                  Add customer
                </Button>
              </Link>
            </div>
          </>
        ) : (
          "Wait....."
        )}
      </div>
    </div>
  );
};

export default Page;
