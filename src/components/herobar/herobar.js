import Image from "next/image";
import style from "./herobar.module.css";
import { Button } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
const HeroBar = () => {
  return (
    <div className={style.main}>
      <div className={style.imgcon}>
        <Image
          src={"/hero_text.svg"}
          width={400}
          height={400}
          alt={"hero image"}
        />
        <Image
          src={"/hero_img.svg"}
          width={400}
          height={400}
          alt={"hero image"}
        />
      </div>
      <div className={style.butcon}>
        <Link href={"/signup"}>
          {" "}
          <Button
            variant="outlined"
            style={{
              border: "2px solid #006600",
              color: "#006600",
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            endIcon={<SchoolIcon />}
          >
            Tutorials
          </Button>
        </Link>
        <Link href={"signup"}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#006600",
              fontWeight: "bold",
            }}
            endIcon={<VpnKeyIcon />}
          >
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default HeroBar;
