import Image from "next/image";
import style from "./upper.module.css";
const Upper = () => {
  return (
    <div className={style.main}>
      <div className={style.imgcon}>
        <Image src={"/logotemp.svg"} width={230} height={60} />
      </div>
      <div className={style.icons}>
        <Image
          src={"/socialicons/facebook.png"}
          width={40}
          height={40}
          alt="facebook link"
        />
        <Image
          src={"/socialicons/twitter.png"}
          width={40}
          height={40}
          alt="twitter link"
        />
        <Image
          src={"/socialicons/linkedin.png"}
          width={40}
          height={40}
          alt="linkedin link"
        />
        <Image
          src={"/socialicons/tiktok.png"}
          width={40}
          height={40}
          alt="tiktok link"
        />
        <Image
          src={"/socialicons/youtube.png"}
          width={40}
          height={40}
          alt="youtube link"
        />
        <Image
          src={"/socialicons/instagram.png"}
          width={40}
          height={40}
          alt="instagram link"
        />
      </div>
    </div>
  );
};
export default Upper;
