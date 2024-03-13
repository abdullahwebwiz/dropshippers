import Link from "next/link";
import ProductCard from "./productcard/productcard";
import style from "./productsection.module.css";
const ProductSection = () => {
  return (
    <Link href={"/signup"}>
      <div className={style.main}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Link>
  );
};
export default ProductSection;
