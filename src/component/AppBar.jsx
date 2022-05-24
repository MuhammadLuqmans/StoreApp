import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/firebaseContext";
import BasicModal from "./Modal/AuthModal";

const pages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Product", link: "/product" },
  { id: 3, name: "Cart", link: "/cart" },
  // { id: 3, name: "", link: "/cart" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = ({ handleDrawerOpen }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [openLoginModal, setOpenLoginModal] = React.useState(false);
  const handleOpenLogin = () => setOpenLoginModal(true);
  const handleCloseLogin = () => setOpenLoginModal(false);

  const { logout } = useAuth();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  //   console.log(anchorElNav)
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (link) => {
    navigate(`${link}`);
    console.log(link);
  };

  const items = useSelector((state) => state.cart);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="/assets/logo.png"
            sx={{ width: 60, mr: 2, display: { xs: "none", md: "block" } }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              fontFamily: "Roboto, sans-serif",
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Brand Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/logo.png"
              sx={{ width: 60, mr: 2, display: { xs: "block", md: "block" } }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".03rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Brand Store
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => handleClick(page.link)}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {!currentUser ? (
            <Box>
              <Avatar
                alt="Luqman"
                onClick={handleOpenLogin}
                // src="/static/images/avatar/2.jpg"
                sx={{ cursor: "pointer" }}
              >
                <PersonIcon />
              </Avatar>
              <BasicModal
                handleCloseLogin={handleCloseLogin}
                handleOpenLogin={handleOpenLogin}
                openLoginModal={openLoginModal}
              />
            </Box>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Setting</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Cart</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
          <Link to='/cart' style={{ textDecoration:'none' }}>
          <Badge badgeContent={items.length} color="warning" sx={{ ml: 2, color:'#fff', fontWeight:'bold','& svg':{
            fill:'#fff',
            width:35,
            height:35
          } }}>
            <ShoppingCartIcon />
          </Badge>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
