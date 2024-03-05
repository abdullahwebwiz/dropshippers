"use client";
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Storefront,
  People,
  AttachMoney,
  ShoppingBasket,
  Notifications,
  Home
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
const AdminSideBar = () => {
  const router = useRouter();
  const menuItems = [
    { text: "Home", icon: <Home />, path: "/admin" },
    { text: "Products", icon: <Storefront />, path: "/admin/products" },
    { text: "Customers", icon: <People />, path: "/admin/customers" },
    {
      text: "Dropshippers",
      icon: <AttachMoney />,
      path: "/admin/dropshippers",
    },
    { text: "Orders", icon: <ShoppingBasket />, path: "/admin/orders" },
    {
      text: "Notifications",
      icon: <Notifications />,
      path: "/admin/notifications",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: "#333", // Dark background color
          color: "#fff", // White text color
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              router.push(item.path);
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSideBar;
