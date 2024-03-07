import style from "./whatsappicon.module.css";
import Image from "next/image";
const WhatsAppIcon = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100vh",
      }}
    >
      <Image
        className={style.img}
        src={"/whatsappicon.png"}
        width={70}
        height={70}
      />
    </div>
  );
};
export default WhatsAppIcon;
