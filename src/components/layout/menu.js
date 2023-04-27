import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import {
  Dashboard,
  Groups,
  Keyboard,
  EmojiEvents,
  MyLocation,
  AssignmentLate,
  Settings,
  AccountBalance,
  SupportAgent,
  Feedback,
  Logout,
} from "@mui/icons-material";
import classes from "./menu.module.css";

const drawerWidth = 240;

const mainItens = [
  { title: "Dashboard", icon: <Dashboard color="primary" /> },
  { title: "Teams", icon: <Groups color="primary" /> },
  { title: "Commands", icon: <Keyboard color="primary" /> },
  { title: "Rewards", icon: <EmojiEvents color="primary" /> },
  { title: "Goals", icon: <MyLocation color="primary" /> },
  { title: "Rewards Claims", icon: <AssignmentLate color="primary" /> },
];

const secondaryItens = [
  { title: "Billing", icon: <AccountBalance color="text.secondary" /> },
  { title: "Support", icon: <SupportAgent color="text.secondary" /> },
  { title: "Feedback", icon: <Feedback color="text.secondary" /> },
  { title: "Logout", icon: <Logout color="text.secondary" /> },
];

export default function CustomMenu({ isOpen, handleClose }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const mainMenu = mainItens.map((item, index) => {
    return (
      <Box key={index + item.title} sx={{ marginLeft: "2%", marginTop: "1%" }}>
        <ListItem disablePadding>
          <ListItemButton className={classes.customlistitembutton}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" fontSize={14}>
                  {item.title}
                </Typography>
              }
              sx={{ color: "secondary" }}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    );
  });

  const secondaryMenu = secondaryItens.map((item, index) => {
    return (
      <Box key={index + item.title} sx={{ marginLeft: "2%", marginTop: "1%" }}>
        <ListItem disablePadding>
          <ListItemButton className={classes.customlistitembutton}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" fontSize={12}>
                  {item.title}
                </Typography>
              }
              sx={{ color: "#8F8F8F" }}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    );
  });

  return (
    <Box sx={{ display: "flex", zIndex: "1" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={width >= 900 ? "permanent" : "temporary"}
        anchor="left"
        open={isOpen}
        onClose={handleClose}
      >
        <Toolbar />
        <List>{mainMenu}</List>
        <div style={{ marginTop: "15vh" }}>
          <List>{secondaryMenu}</List>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "transparent", p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
