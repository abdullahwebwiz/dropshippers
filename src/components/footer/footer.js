import Bottom from "./bottom/bottom";
import style from "./footer.module.css";
import Middle from "./middle/middle";
import Upper from "./upper/upper";
const Footer = () => {
  return (
    <div className={style.main}>
      <Upper />
      <Middle />
      <Bottom />
    </div>
  );
};
export default Footer;
