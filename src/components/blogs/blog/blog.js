import Image from "next/image";
import style from "./blog.module.css";
import Link from "next/link";
const Blog = () => {
  return (
    <Link href={"/signip"}>
      <div className={`${style.block}`}>
        <Image
          src={"/categories/1.svg"}
          width={300}
          height={150}
          className={`${style.img}`}
          alt="blog thumbnail"
        />
        <div className={style.title}>
          Coming soon!!!. Good things take time.
        </div>
      </div>
    </Link>
  );
};
export default Blog;
