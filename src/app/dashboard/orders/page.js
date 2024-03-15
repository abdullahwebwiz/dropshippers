import style from "./page.module.css";
import Header from "../header";
import Link from "next/link";
const Page = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        <div className={style.button} style={{ backgroundColor: "#F85606" }}>
          <Link
            href={"/dashboard/orders/darazorders"}
            style={{ color: "white" }}
          >
            Daraz Orders
          </Link>
        </div>
        <div className={style.button} style={{ backgroundColor: "#96bf48" }}>
          <Link
            href={"/dashboard/orders/generalorders"}
            style={{ color: "white" }}
          >
            General Orders
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Page;
