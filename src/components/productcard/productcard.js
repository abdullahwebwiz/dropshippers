import style from "./productcard.module.css";
import MyImage from "../myimage/myimage";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Chip, IconButton } from "@mui/material";
import { data2 } from "@/data/data2";
import { copy } from "clipboard";
import Image from "next/image";
const ProductCard = ({ image, title, price, productId, category, status }) => {
  return (
    <div className={style.card}>
      <Chip
        variant="outlined"
        className={style.status}
        color={status == "active" ? "success" : "warning"}
        size="small"
        label={status == "active" ? "Active" : "Unavailable"}
      />

      <div className={style.imgcon}>
        <Image
          src={data2.fileurl + "productimages/" + image + ".png"}
          width={200}
          height={200}
          alt="my imge"
        />
      </div>
      <div className={style.info}>
        {" "}
        <div className={style.title}>{title}</div>
        <div className={style.price}>{"PKR " + price}</div>
        <div className={style.pid}>{"ID: " + " " + productId}</div>
      </div>
      <IconButton
        aria-label="copy"
        className={style.copy}
        onClick={() => {
          copy(productId);
          alert("Copied!");
        }}
      >
        <ContentCopyIcon />
      </IconButton>
    </div>
  );
};

export default ProductCard;
