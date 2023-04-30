import * as React from "react";
import { Notifications } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "./assets/logo.svg";
import { Badge } from "@mui/material";
import CustomMenu from "./menu";
import BackgroundLetterAvatars from "./backgroundletteravatars";

const settings = ["Profile"];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setIsMenuOpen(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" color="secondary" sx={{ zIndex: "2" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Container>
                <img src={logo} alt="logo" style={{ height: "50px" }} />
              </Container>
              <Badge
                badgeContent={10}
                color="success"
                sx={{ marginRight: "10%" }}
              >
                <Notifications color="primary" />
              </Badge>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="View Profile Settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <BackgroundLetterAvatars />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <CustomMenu
          sx={{ zIndex: "1" }}
          isOpen={isMenuOpen}
          handleClose={handleCloseNavMenu}
        />
      </Box>
    </>
  );
}

export default Navbar;
