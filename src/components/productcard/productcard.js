import style from "./productcard.module.css";
import MyImage from "../myimage/myimage";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
const ProductCard = ({ image, title, price, productId, category, status }) => {
  return (
    <div className={style.card}>
      <div className={style.status}>{status}</div>
      <div className={style.imgcon}>
        <MyImage
          name={image}
          folder={"productimages"}
          width={200}
          height={200}
          alt={"my image"}
          style={{ border: "2px solid green" }}
        />
      </div>
      <div className={style.title}>{category}</div>
      <div className={style.title}>{title}</div>
      <div className={style.title}>{"PKR " + price}</div>
      <div className={style.title}>{"ID# " + productId}</div>

      <IconButton
        aria-label="copy"
        onClick={() => {
          copy("03274996979");
          alert("Copied!");
        }}
      >
        <ContentCopyIcon />
      </IconButton>
    </div>
  );
};

export default ProductCard;
