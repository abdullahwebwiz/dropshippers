import Link from "next/link";
import style from "./whatsappicon.module.css";
import Image from "next/image";
const WhatsAppIcon = () => {
  return (
    <Link href={"https://wa.me/message/NHX4OKHRYJEUK1"} target={"_blank"}>
      <Image
        className={style.img}
        src={"/whatsappicon.png"}
        width={70}
        height={70}
      />
    </Link>
  );
};
export default WhatsAppIcon;
