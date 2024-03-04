"use client";
import { apiCall } from "@/utils/apicall";
const Page = () => {
  const x = async () => {
    const url = "http://localhost:3000/api/adminverify";
    const method = "POST";
    const body = {
      admin: "abdullah_admin",
      password: "admin_123",
    };
    try {
      const data = await apiCall(url, method, body);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data in getStaticProps:", error);
    }
  };

  return <div onClick={x}>Click here</div>;
};
export default Page;
