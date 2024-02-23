import Image from "next/image";
import style from "./whyuscard.module.css";
const WhyUsCard = ({ title, img, desc, alt }) => {
  return (
    <div className={style.main}>
      <div className={style.title}>{title}</div>
      <div className={style.img}>
        <Image
          src={"/whyimgs/" + img + ".svg"}
          width={150}
          height={150}
          alt={alt}
          className={style.imgone}
        />
      </div>
      <div className={style.desc}>{desc}</div>
    </div>
  );
};
export default WhyUsCard;
