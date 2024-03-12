"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const Page = () => {
  let router = useRouter();
  useEffect(() => {
    const logout = async () => {
      // Ask for confirmation
      const confirmResult = await Swal.fire({
        title: "Are you sure you want to log out?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, log out",
        cancelButtonText: "No, stay logged in",
      });

      if (confirmResult.isConfirmed) {
        // Remove cookie and redirect
        Cookies.remove("d_id");
        router.push("/");
      } else {
        // Redirect without removing cookie
        router.push("/dashboard");
      }
    };

    logout();
  }, []);

  return null;
};

export default Page;
