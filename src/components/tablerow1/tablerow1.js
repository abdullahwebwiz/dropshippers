"use client";
import { format } from "date-fns";
import { TableRow, TableCell } from "@mui/material";
import Button from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { data2 } from "@/data/data2";
import Link from "next/link";

const TableRow1 = ({ oid, did, pid, cid, epoch, status, quantity }) => {
  let [product, setproduct] = useState(null);
  let [customer, setcustomer] = useState(null);

  useEffect(() => {
    if ((product, customer)) {
      console.log(product);
      console.log(customer);
    }
  }, [product, customer]);

  useEffect(() => {
    if (pid) {
      fetch(data2.production + "/api/products/getproduct/" + pid)
        .then((response) => response.json())
        .then((data) => {
          setproduct(data);
        });
    }
  }, [pid]);

  useEffect(() => {
    if (cid) {
      fetch(data2.production + "/api/customers/getcustomer/" + cid)
        .then((response) => response.json())
        .then((data) => {
          setcustomer(data);
        });
    }
  }, [cid]);

  const handlealert = (x) => {
    if ((customer, product)) {
      if (x == "p") {
        Swal.fire({
          title: "Product Information",
          html: `Product ID: ${product.p_id}<br>
           Product: ${product.title}<br>
           Price: ${product.price}`,
          icon: "info",
          confirmButtonText: "Close",
        });
      } else if (x == "c") {
        Swal.fire({
          title: "Dropshipper Information",
          html: `Customer ID: ${customer.c_id}<br>
           Customer Name: ${customer.name}<br>
           Phone: ${customer.phone}<br>
           City: ${customer.city}<br>
           Address: ${customer.address}`,
          icon: "info",
          confirmButtonText: "Close",
        });
      }
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
          `${data2.production}/api/generalorders/updatestatus/${oid}/${status}`
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
          <TableCell>
            <Link
              href={data2.fileurl + "payments/" + oid + ".png"}
              target="_blank"
            >
              {" "}
              View Payment
            </Link>
          </TableCell>
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
export default TableRow1;
