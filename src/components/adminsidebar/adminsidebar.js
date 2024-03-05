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
} from "@mui/icons-material";

const AdminSideBar = () => {
  const menuItems = [
    { text: "Products", icon: <Storefront />, path: "/products" },
    { text: "Customers", icon: <People />, path: "/customers" },
    { text: "Dropshippers", icon: <AttachMoney />, path: "/dropshippers" },
    { text: "Orders", icon: <ShoppingBasket />, path: "/orders" },
    { text: "Notifications", icon: <Notifications />, path: "/notifications" },
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
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSideBar;
