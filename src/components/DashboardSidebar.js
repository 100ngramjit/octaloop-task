import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar } from "@mui/material";
import logo from "../assets/logo.png";
import icon1 from "../assets/item1.png";
import icon2 from "../assets/item2.png";
import icon3 from "../assets/item3.png";
import icon4 from "../assets/item4.png";
import icon5 from "../assets/item5.png";
import icon6 from "../assets/item6.png";

const DashboardSidebar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="logo"
                src={logo}
                style={{ width: 30, height: 30, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon1"
                src={icon1}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon2"
                src={icon2}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon3"
                src={icon3}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon4"
                src={icon4}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon5"
                src={icon5}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>{" "}
      </List>
      <List>
        <ListItem disablePadding sx={{ display: "block", mt: 20 }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              <img
                alt="icon6"
                src={icon6}
                style={{ width: 35, height: 50, my: 2 }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default DashboardSidebar;
