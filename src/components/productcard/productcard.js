import Image from "next/image";
import style from "./productcard.module.css";
import Image1 from "../../productimages/5nyjdxaheb0.png";
const ProductCard = ({ image, title, price, productId }) => {
  return (
    <div className={style.card}>
      <div className={style.imgcon}>
        <Image
          src={"../../productimages/5nyjdxaheb0.png"}
          width={250}
          height={250}
        />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.title}>{"PKR " + price}</div>
      <div className={style.title}>{"ID# " + productId}</div>
    </div>
  );
};

export default ProductCard;
