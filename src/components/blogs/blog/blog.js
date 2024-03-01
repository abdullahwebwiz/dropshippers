import Image from "next/image";
import style from "./blog.module.css";
const Blog = () => {
  return (
    <div className={`${style.block}`}>
      <Image
        src={"/categories/1.svg"}
        width={300}
        height={150}
        className={`${style.img}`}
        alt="blog thumbnail"
      />
      <div className={style.title}>
        This is my post and You can read it to get knowledge. I hope you will
        enjoy it.
      </div>
    </div>
  );
};
export default Blog;
