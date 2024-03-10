import style from "./page.module.css";
import Header from "../../header";
const Page = () => {
  return (
    <div>
      <Header />
      <div className={style.con}>
        <div className={style.card}>
          <div>Order_ID: 123</div>
          <div>10 March 2024</div>
          <div>12:09 PM</div>
          <div>Processing</div>
        </div>
      </div>
    </div>
  );
};
