"use client";
import { format } from "date-fns";
import { TableRow, TableCell } from "@mui/material";
import Button from "@mui/material";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { data2 } from "@/data/data2";
import Image from "next/image";
import Link from "next/link";
const TableRow2 = ({ oid, did, pid, epoch, status, quantity }) => {
  let [product, setproduct] = useState(null);
  let [showpay, setshowpay] = useState(false);

  useEffect(() => {
    console.log(oid);
  }, []);

  useEffect(() => {
    if (pid) {
      fetch(data2.production + "/api/products/getproduct/" + pid)
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
      {did && product && oid ? (
        <TableRow>
          <TableCell>{did}</TableCell>
          <Link
            href={data2.fileurl + "shipping_labels/" + oid + "0.pdf"}
            target="_blank"
          >
            {" "}
            <TableCell>Download label</TableCell>
          </Link>
          <TableCell onClick={() => setshowpay(true)}>View Payment</TableCell>
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
      {showpay && oid ? (
        <>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(1,1,1,0.4)",
            }}
          >
            <Image
              src={data2.fileurl + "payments/" + oid + "1.png"}
              width={400}
              height={400}
              alt={"my image"}
            />
            <button onClick={() => setshowpay(false)}>Close</button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default TableRow2;
