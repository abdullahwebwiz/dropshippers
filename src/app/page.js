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
import Blogs from "@/components/blogs/blogs";
import Tutorials from "@/components/tutorials/tutorials";
import Stat from "@/components/stat/stat";
import ReviewSection from "@/components/reviewsection2/reviewsection";
import FAQS from "@/components/faqs/faqs";
import NewsLetter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/footer";
import WhatsAppIcon from "@/components/whatsappicon/whatsappicon";

export default function Home() {
  return (
    <div>
      <WhatsAppIcon />
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
      <Title color={"o"} title={"About Co-founders 💼"} />
      <CEO />
      <Space />
      <Tutorials />
      <Space />
      <Title color={"p"} title={"CheckOut Products 🛍️"} />
      <ProductSection />
      <LearnMore link={"/"} />
      <Space />
      <Title color={"o"} title={"Categories 🛍️"} />
      <CategorySection />
      <LearnMore link={"/"} />
      <Space />
      <Title color={"p"} title={"News & updates 📝"} />
      <Blogs />
      <LearnMore link={"/"} />
      <Space />
      <Stat />
      <Space />
      <ReviewSection />
      <Space />
      <FAQS />
      <Space />
      <NewsLetter />
      <Space />
      <Footer />
    </div>
  );
}
