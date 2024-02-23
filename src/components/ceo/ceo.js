import Image from "next/image";
import style from "./ceo.module.css";
const CEO = () => {
  return (
    <div className={style.main}>
      <div className={style.photo}>
        <Image src={"/ceo.svg"} width={400} height={400} className={style.myimg}/>
      </div>
      <div className={style.para}>
        <span>As-salamu alaykum</span>. Warm greetings to all aspiring young
        Entrepreneurs!{" "}
        <span>DropShippers.pk</span> stands as one of my products, with its core
        mission being to introduce the youth to <span>real-world</span> business
        without heavy initial investments. I am not saying that here you will
        become overnight{" "}
        <span>billionaire</span> , but I firmly believe that{" "}
        <span>DropShippers.pk</span> can serve as the catalyst to kickstart your
        entrepreneurial journey, leading you towards independence, by the{" "}
        <span>grace of Allah</span>. Rather than dwelling on unfavorable
        circumstances, let us channel our energy into finding pathways to
        enhance our lives. Join <span>DropShippers.pk</span> today, and
        together, let's embark on a journey of <span>growth and success</span>.
      </div>
    </div>
  );
};
export default CEO;
