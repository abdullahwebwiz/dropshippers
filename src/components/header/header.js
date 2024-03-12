import Image from "next/image";
import style from "./header.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
const Header = () => {
  return (
    <div className={style.main}>
      <div className={style.logocon}>
        {" "}
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={230}
            height={60}
            alt={"logo"}
            className={style.logo}
          />
        </Link>
      </div>
      <div className={style.icons}>
        <Image
          src={"/social_icons/facebook_p.png"}
          width={40}
          height={40}
          alt={"facebook icon"}
        />
        <Image
          src={"/social_icons/instagram_p.png"}
          width={40}
          height={40}
          alt={"instagram icon"}
        />
        <Image
          src={"/social_icons/youtube_p.png"}
          width={40}
          height={40}
          alt={"youtube icon"}
        />
        <Image
          src={"/social_icons/tiktok_p.png"}
          width={40}
          height={40}
          alt={"tiktok icon"}
        />
        <Image
          src={"/social_icons/linkedin_p.png"}
          width={40}
          height={40}
          alt={"linkedin icon"}
        />
      </div>
      <div className={style.navbar}>
        <div className={style.nav}>اردو</div>
        <div className={style.nav}>Products</div>
        <div className={style.nav}>Support</div>
      </div>
      <div className={style.signlog}>
        <Link href={"/signup"} style={{ color: "white" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f85606",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link href={"/login"} style={{ color: "white" }}>
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
        </Link>
      </div>
      <div className={style.menuicon}>
        <Image src={"/menu.png"} width={40} height={40} alt={"menu"} />
      </div>
    </div>
  );
};
export default Header;
