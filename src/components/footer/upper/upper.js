import Image from "next/image";
import style from "./upper.module.css";
const Upper = () => {
  return (
    <div className={style.main}>
      <div>
        <Image src={"/logo.svg"} width={230} height={60} />
      </div>
      <div className={style.icons}>
        <Image src={"/socialicons/facebook.png"} width={40} height={40} />
        <Image src={"/socialicons/twitter.png"} width={40} height={40} />
        <Image src={"/socialicons/linkedin.png"} width={40} height={40} />
        <Image src={"/socialicons/tiktok.png"} width={40} height={40} />
        <Image src={"/socialicons/youtube.png"} width={40} height={40} />
        <Image src={"/socialicons/instagram.png"} width={40} height={40} />
      </div>
    </div>
  );
};
export default Upper;
