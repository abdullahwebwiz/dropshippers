import Image from "next/image";
import style from "./newsletter.module.css";
const NewsLetter = () => {
  return (
    <div className={style.main}>
      <div className={style.title}>Subscribe Our NewsLetter 📬</div>
      <div className={style.inputcon}>
        {" "}
        <input
          type="text"
          className={style.newsinput}
          placeholder="Enter WhatsApp Number"
          
        />
        <button className={style.newsbutton}>Subscribe</button>
      </div>
      <div className={style.text}>
        Be the first get latest product updates & news 📢. Stay Connected 🔔.
      </div>
    </div>
  );
};
export default NewsLetter;
