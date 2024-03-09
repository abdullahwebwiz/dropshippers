import Header from "./header";
import style from "./page.module.css";
const Page = () => {
  return (
    <>
      <Header />
      <div className={style.welcome}>Welcome to your side Hustle!</div>
    </>
  );
};

export default Page;
