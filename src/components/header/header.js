import Image from "next/image";
import style from "./header.module.css";
import { Button } from "@mui/material";
const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.logocon}>
        {" "}
        <Image
          src={"/logo.svg"}
          width={230}
          height={60}
          alt={"logo"}
          className={style.logo}
        />
      </div>
      <div className={style.signlog}>
        <Button
          variant="outlined"
          style={{
            border: "2px solid #f85606",
            color: "#f85606",
            fontWeight: "bold",
          }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#f85606",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Button>
      </div>
      <div className={style.navbar}>
        <div className={style.nav}>اردو</div>
        <div className={style.nav}>Products</div>
        <div className={style.nav}>Support</div>
      </div>
      <div className={style.menuicon}>
        <Image src={"/menu.png"} width={40} height={40} alt={"menu"} />
      </div>
    </div>
  );
};
export default Header;
