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

function createData(
  Product_ID,
  Name,
  Description,
  Price,
  Video,
  Update,
  Status,
  Delete
) {
  return {
    Product_ID,
    Name,
    Description,
    Price,
    Video,
    Update,
    Status,
    Delete,
  };
}

const Page = () => {
  let [rows, setRows] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/products/getproducts")
      .then((response) => response.json())
      .then((data) => {
        setRows(data);
        console.log(data);
      });
  }, []);

  const deleteProduct = (p_id) => {
    alert(p_id);
    fetch("http://localhost:3000/api/products/deleteproduct/" + p_id)
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
                      Product ID
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
                      Price
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Description
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      video Link
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Status
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      Update
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
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.p_id}</TableCell>
                      <TableCell align="left">{row.title}</TableCell>
                      <TableCell align="left">{row.price}</TableCell>
                      <TableCell align="left">
                        {row.Description.substring(0, 40)}
                        <span
                          style={{ cursor: "pointer", color: "blue" }}
                          onClick={() => {
                            Swal.fire({
                              title: "Description",
                              text: row.Description,
                              icon: "info",
                            });
                          }}
                        >
                          ...See more
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <Link href={row.video} target={"_blank"}>
                          {"Watch"}
                        </Link>
                      </TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">
                        {
                          <Link
                            href={"/admin/products/updateproduct/" + row.p_id}
                          >
                            <Button variant="contained" color="success">
                              Update
                            </Button>
                          </Link>
                        }
                      </TableCell>
                      <TableCell align="right">
                        {
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteProduct(row.p_id)}
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
              <Link href={"/admin/products/addproduct"}>
                <Button variant="contained" color="primary">
                  Add Product
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
