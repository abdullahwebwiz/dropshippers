import Image from "next/image";
import style from "./productcard.module.css";
const ProductCard = () => {
  return (
    <div className={style.main}>
      <div className={style.imgcon}>
        <Image
          src={"/products/1.png"}
          width={300}
          height={300}
          className={style.img}
        />
      </div>
      <div className={style.title}>TWS Air Pro 2 | Noise Cancelation.</div>
      <div className={style.prices}>
        <div className={style.rprice}>
          <span style={{ color: "blue", fontWeight: "500" }}>Retail Price</span>
          : PKR 3000/-
        </div>
        <div className={style.wprice}>
          <span style={{ color: "green", fontWeight: "500" }}>
            WholeSale Price
          </span>
          : PKR 1999/-
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
