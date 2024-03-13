"use client";
import Swal from "sweetalert2";
import { data2 } from "@/data/data2";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = (content) => {
  let router = useRouter();
  let cid = content.params.cid;

  useEffect(() => {
    if (cid) {
      fetch(data2.production + "/api/customers/deletecustomer/" + cid)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.msg == "success") {
            Swal.fire({
              title: "Success",
              text: "Data successfully deleted",
              icon: "success",
            });
            router.push("/admin/customers");
          } else {
            Swal.fire({
              title: "Failed",
              text: "Something went wrong. Data not deleted",
              icon: "error",
            });
            router.push("/admin/customers");
          }
        });
    }
  }, [cid]);


  return <div>Wait..</div>;
};

export default Page;
