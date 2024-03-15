"use client";
import Image from "next/image";
import style from "./header.module.css";
import { Button } from "@mui/material";
import Link from "next/link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SchoolIcon from "@mui/icons-material/School";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import { HowToRegOutlined, LoginOutlined, SignpostOutlined } from "@mui/icons-material";
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  const menuItems = [
    { text: "Sign Up", icon: <HowToRegOutlined />, link: "/signup" },
    { text: "Log In", icon: <LoginOutlined />, link: "/login" },
  ];

  return (
    <div className={style.main}>
      <div className={style.logocon}>
        {" "}
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            width={230}
            height={60}
            alt={"logo"}
            className={style.logo}
          />
        </Link>
      </div>
      <div className={style.icons}>
        <Image
          src={"/social_icons/facebook_p.png"}
          width={40}
          height={40}
          alt={"facebook icon"}
        />
        <Image
          src={"/social_icons/instagram_p.png"}
          width={40}
          height={40}
          alt={"instagram icon"}
        />
        <Image
          src={"/social_icons/youtube_p.png"}
          width={40}
          height={40}
          alt={"youtube icon"}
        />
        <Image
          src={"/social_icons/tiktok_p.png"}
          width={40}
          height={40}
          alt={"tiktok icon"}
        />
        <Image
          src={"/social_icons/linkedin_p.png"}
          width={40}
          height={40}
          alt={"linkedin icon"}
        />
      </div>
      <div className={style.navbar}>
        <div className={style.nav}>اردو</div>
        <div className={style.nav}>Products</div>
        <div className={style.nav}>Support</div>
      </div>
      <div className={style.signlog}>
        <Link href={"/signup"} style={{ color: "white" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f85606",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link href={"/login"} style={{ color: "white" }}>
          <Button
            variant="outlined"
            style={{
              border: "2px solid #f85606",
              color: "#f85606",
              fontWeight: "bold",
            }}
          >
            Log In
          </Button>
        </Link>
      </div>
      <div className={style.menuicon} onClick={handleDrawerToggle}>
        <Image src={"/menu.png"} width={40} height={40} alt={"menu"} />
      </div>
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawerToggle}>
        <div
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                target={"_blank"}
              >
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default Header;
