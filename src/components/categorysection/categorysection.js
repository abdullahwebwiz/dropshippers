import Image from "next/image";
import style from "./categorysection.module.css";
const CategorySection = () => {
  return (
    <div className={style.main}>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/1.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
        />
      </div>

      <div className={`${style.block}`}>
        <Image
          src={"/categories/2.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
        />
      </div>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/3.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
        />
      </div>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/4.svg"}
          width={300}
          height={300}
          className={`${style.img}`}
        />
      </div>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/5.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
        />
      </div>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/6.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
        />
      </div>
    </div>
  );
};
export default CategorySection;
