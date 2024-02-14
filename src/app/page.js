import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import HeroBar from "@/components/herobar/herobar";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroBar />
    </div>
  );
}
