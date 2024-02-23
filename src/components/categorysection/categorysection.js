import style from "./categorysection.module.css";
const CategorySection = () => {
  return (
    <div className={style.main}>
      <div className={`${style.block} ${style.b1}`}></div>
      <div className={`${style.block} ${style.b2}`}></div>
      <div className={`${style.block} ${style.b3}`}></div>
      <div className={`${style.block} ${style.b4}`}></div>
      <div className={`${style.block} ${style.b5}`}></div>
      <div className={`${style.block} ${style.b6}`}></div>
    </div>
  );
};
export default CategorySection;
