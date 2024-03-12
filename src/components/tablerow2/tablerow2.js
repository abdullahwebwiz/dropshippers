"use client";
import { format } from "date-fns";
import { TableRow, TableCell } from "@mui/material";
import Button from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const TableRow2 = ({ oid, did, pid, epoch, status, quantity }) => {
  let [product, setproduct] = useState(null);

  useEffect(() => {
    if (pid) {
      fetch("http://localhost:3000/api/products/getproduct/" + pid)
        .then((response) => response.json())
        .then((data) => {
          setproduct(data);
        });
    }
  }, [pid]);

  const handlealert = (x) => {
    if (product && x == "p") {
      Swal.fire({
        title: "Product Information",
        html: `Product ID: ${product.p_id}<br>
           Product: ${product.title}<br>
           Price: ${product.price}`,
        icon: "info",
        confirmButtonText: "Close",
      });
    }
  };

  const UpdateStatus = () => {
    Swal.fire({
      title: "Select Status",
      input: "select",
      inputOptions: {
        processing: "Processing",
        dispatched: "Dispatched",
        failed: "Failed",
      },
      inputPlaceholder: "Select a status",
      showCancelButton: true,
      confirmButtonText: "Update",
      showLoaderOnConfirm: true,
      preConfirm: (status) => {
        return fetch(
          `http://localhost:3000/api/generalorders/updatestatus/${oid}/${status}`
        )
          .then((response) => {
            if (!response.ok) {
              Swal.fire({
                title: "Failed",
                icon: "error",
              });
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Updated!",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      {did && product ? (
        <TableRow>
          <TableCell>{did}</TableCell>
          <TableCell onClick={() => handlealert("c")}>{cid}</TableCell>
          <TableCell onClick={() => handlealert("p")}>
            {product.title}
          </TableCell>
          <TableCell>{quantity}</TableCell>
          <TableCell>{format(new Date(Number(epoch)), "MM/dd/yyyy")}</TableCell>
          <TableCell>{format(new Date(Number(epoch)), "hh:mm a")}</TableCell>
          <TableCell>{status}</TableCell>
          <TableCell onClick={UpdateStatus}>Update</TableCell>
        </TableRow>
      ) : (
        ""
      )}
    </>
  );
};
export default TableRow2;
