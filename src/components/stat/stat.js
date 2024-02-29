import Title from "../title/title";
import style from "./stat.module.css";
const Stat = () => {
  return (
    <>
      <div className={style.main}>
        <Title title={"Some Data 📊 "} color={"p"} />
        <div className={style.con}>
          <div className={style.block}>
            <div className={style.num}>200+</div>
            <div className={style.name}>DropShippers</div>
          </div>
          <div className={style.block}>
            <div className={style.num}>300+</div>
            <div className={style.name}>Available Product</div>
          </div>
          <div className={style.block}>
            <div className={style.num}>1200+</div>
            <div className={style.name}>Monthly Sales</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Stat;
