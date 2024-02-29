import Image from "next/image";
import style from "./reviewsection.module.css";

let data = [
  {
    name: "Abdullah",
    city: "Kohat",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Salman",
    city: "Karachi",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Javed",
    city: "Lahore",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Kamran",
    city: "Quetta",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
  {
    name: "Adam",
    city: "Peshawar",
    msg: "This is a very useful plateform. I will recommend this plateform toall my fellow all accross the country. 5 out of 5 stars from me. Trust me you will love it too. My dear brothers and sisters you need to raise and shine.",
    stars: 5,
  },
];

const ReviewSection = () => {
  return (
    <div className={style.main}>
      <div className={style.reviewcon}>
        <div className={style.review}>
          <div className={style.namecity}>
            <div className={style.name}>Abdullah</div>
            <div className={style.city}>From Kohat</div>
          </div>
          <div className={style.msg}>
            This is a very useful plateform. I will recommend this plateform to
            all my fellow all accross the country. 5 out of 5 stars from me.
            Trust me you will love it too. My dear brothers and sisters you need
            to raise and shine.
          </div>
          <div className={style.stars}>
            <Image src={'/star.png'} width={100} height={100}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReviewSection;
