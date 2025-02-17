"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./page.module.css";
import Cookies from "js-cookie";
import Image from "next/image";
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
import CategoryIcon from '@mui/icons-material/Category';
import { data2 } from "@/data/data2";
const Header = () => {
  const [name, setName] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const cookieValue = Cookies.get("d_id");

  useEffect(() => {
    if (cookieValue) {
      fetch(
        data2.production+"/api/dropshippers/getdropshipper/" + cookieValue
      )
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          console.log(data);
        });
    }
  }, [cookieValue]);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems = [
    { text: "Orders", icon: <ShoppingCartIcon />, link: "/dashboard/orders" },
    { text: "Products", icon: <CategoryIcon />, link: "/dashboard/products" },
    { text: "Customers", icon: <PeopleIcon />, link: "/dashboard/customers" },
    { text: "Information", icon: <InfoIcon />, link: "/dashboard/information" },
    {
      text: "Notification",
      icon: <NotificationsIcon />,
      link: "/dashboard/notifications",
    },
    {
      text: "Profit Calculator",
      icon: <MonetizationOnIcon />,
      link: "https://app.jarvis.pk/calculator",
      blank: true,
    },
    { text: "Tutorials", icon: <SchoolIcon />, link: "/dashboard/tutorials" },
    {
      text: "Finance",
      icon: <AccountBalanceIcon />,
      link: "/dashboard/finance",
    },
    {
      text: "Contact",
      icon: <ContactSupportIcon />,
      link: "https://wa.me/message/NHX4OKHRYJEUK1",
      blank: true,
    },
    {
      text: "Wholesale",
      icon: <AssignmentIcon />,
      link: "/dashboard/wholesale",
    },
    { text: "Services", icon: <GroupIcon />, link: "/dashboard/servicespage" },
    { text: "Logout", icon: <LockIcon />, link: "/dashboard/logout" },
  ];

  return (
    <div className={style.header}>
      <div className={style.name}>{"Welcome " + name}</div>
      <Image
        src={"/menu.png"}
        width={30}
        height={30}
        alt="menu"
        className={style.img}
        onClick={handleDrawerToggle}
      />

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
                target={item.blank ? "_blank" : "_self"}
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
