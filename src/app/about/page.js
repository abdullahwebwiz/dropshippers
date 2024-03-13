"use client";
import MyImage from "@/components/myimage/myimage";
import { useState } from "react";
import { data2 } from "@/data/data2";
export default function Page() {
  async function fetchAndDownloadPDF() {
    try {
      const response = await fetch(
        data2.production + "/api/sendpdf?imagename=0trbp1mda20"
      );
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "myfile.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  }

  return (
    <div>
      <div
        onClick={() => {
          alert();
          fetchAndDownloadPDF();
        }}
      >
        About
      </div>
    </div>
  );
}
