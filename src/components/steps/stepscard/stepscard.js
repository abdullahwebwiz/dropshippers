import Image from "next/image";
import style from "./stepscard.module.css";
const StepsCard = ({ number, img, name }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.number}>{number}</div>
        <div className={style.imgcon}>
          <Image
            src={"/steps/" + img + ".svg"}
            width={170}
            height={170}
            alt={"signup"}
          />
        </div>
        <div className={style.name}>{name}</div>
      </div>
    </>
  );
};
export default StepsCard;
