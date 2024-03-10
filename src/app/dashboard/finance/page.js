"use client";
import Space from "@/components/space/space";
import Header from "../header";
import Title from "@/components/title/title";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { IconButton } from "@mui/material";
import style from "./page.module.css";
import { copy } from "clipboard";
const Page = () => {
  return (
    <div>
      <Header />
      <Space />
      <Title color="o" title={"Use following accounts for payment"} />
      <div className={style.con}>
        <div className={style.card} style={{ backgroundColor: "#a020f0" }}>
          <div>Bank Account</div>
          <div>IBAN: PK15MEZN0027010107172979</div>
          <div>Mohammad Abdullah</div>
          <IconButton
            aria-label="copy"
            onClick={() => {
              copy("PK15MEZN0027010107172979");
              alert('Copied!');
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
        <div className={style.card} style={{ backgroundColor: "#24AA5C" }}>
          <div>Easy Pasia</div>
          <div>03274996979</div>
          <div>Muhammad Aneeq Ahmad</div>
          <IconButton
            aria-label="copy"
            onClick={() => {
              copy("03274996979");
              alert('Copied!');
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
        <div className={style.card} style={{ backgroundColor: "#24AA5C" }}>
          <div>Easy Pasia</div>
          <div>03334478560</div>
          <div>Mohammad Abdullah</div>
          <IconButton
            aria-label="copy"
            onClick={() => {
              copy("03334478560");
              alert('Copied!');
            }}
          >
            <ContentCopyIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Page;
