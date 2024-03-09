"use client";
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

const Page = () => {
  const [name, setName] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const cookieValue = Cookies.get("d_id");

  useEffect(() => {
    if (cookieValue) {
      fetch(
        "http://localhost:3000/api/dropshippers/getdropshipper/" + cookieValue
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
    { text: "Orders", icon: <ShoppingCartIcon /> },
    { text: "Customers", icon: <PeopleIcon /> },
    { text: "Information", icon: <InfoIcon /> },
    { text: "Notification", icon: <NotificationsIcon /> },
    { text: "Profit Calculator", icon: <MonetizationOnIcon /> },
    { text: "Tutorials", icon: <SchoolIcon /> },
    { text: "Finance", icon: <AccountBalanceIcon /> },
    { text: "Contact", icon: <ContactSupportIcon /> },
    { text: "Wholesale", icon: <AssignmentIcon /> },
    { text: "Services", icon: <GroupIcon /> },
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
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Page;
