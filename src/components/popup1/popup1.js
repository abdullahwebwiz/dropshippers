import style from "./popup1.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import { Button } from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import Link from "next/link";
import MyImage from "../myimage/myimage";
const Popup1 = ({ category, description, video, close, pid }) => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        {" "}
        <div className={style.cat}>{category}</div>
        <div className={style.des}>{description}</div>
        <div className={style.vidcon}>
          {" "}
          <Button variant="contained" endIcon={<DownloadIcon />}>
            Download all Images
          </Button>
          <Link href={video} target="_blank" style={{ color: "white" }}>
            <Button
              variant="contained"
              endIcon={<VideoLibraryIcon />}
              color="error"
            >
              {" "}
              Video{" "}
            </Button>
          </Link>
          <Button variant="contained" color="success" onClick={close}>
            Close
          </Button>
          <div className={style.imgcon}>
            <MyImage
              folder={"productimages"}
              name={pid + "0" + ".png"}
              width={200}
              height={200}
              alt={"my img"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup1;
