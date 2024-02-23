import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import HeroBar from "@/components/herobar/herobar";
import AboutSection from "@/components/aboutsection/aboutsection";
import Space from "@/components/space/space";
import WhyUs from "@/components/whyus/whyus";
import Steps from "@/components/steps/steps";
import Title from "@/components/title/title";
import CEO from "@/components/ceo/ceo";
import ProductSection from "@/components/productsection/productsection";
import LearnMore from "@/components/title/learnmore/learnmore";
import CategorySection from "@/components/categorysection/categorysection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBar />
      <Space />
      <Title color={"p"} title={"About Us 📚"} />
      <AboutSection />
      <Space />
      <Title color={"o"} title={"Why DropShippers 🤝"} />
      <WhyUs />
      <Space />
      <Title color={"p"} title={"4 steps Only ✅"} />
      <Steps />
      <Space />
      <Title color={"o"} title={"About CEO 💼"} />
      <CEO />
      <Space />
      <Title color={"p"} title={"CheckOut Products 🛍️"} />
      <ProductSection />
      <LearnMore link={"/"} />
      <Space />
      <Title color={"o"} title={"Categories 🛍️"} />
      <CategorySection />
    </div>
  );
}
