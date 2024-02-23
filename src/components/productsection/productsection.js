import ProductCard from "./productcard/productcard";
import style from "./productsection.module.css";
const ProductSection = () => {
  return (
    <div className={style.main}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default ProductSection;
