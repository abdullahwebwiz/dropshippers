import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/providers";
// import { Providers } from "../redux/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pakistan's Halal Dropshipping service.",
  description:
    "Welcome to Dropshippers.pk, your premier platform for Pakistani entrepreneurs to excel in dropshipping on Daraz, Shopify, Facebook, and beyond. Our 100% halal model, endorsed by Islamic scholars, eliminates worries about investments, packing, shipping, and inventory management. List hundreds of products with zero investment and focus on growing your business hassle-free. Join us today and unleash your dropshipping potential!",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
