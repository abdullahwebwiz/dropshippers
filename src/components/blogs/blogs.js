import Image from "next/image";
import style from "./blogs.module.css";
import Blog from "./blog/blog";
const Blogs = () => {
  return (
    <div className={style.main}>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};
export default Blogs;
