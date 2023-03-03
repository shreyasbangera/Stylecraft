import React from "react";
import { AppBar, Box, Toolbar, Typography, Stack, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import { navbrand } from "../utils/theme";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ background: "#fff", color:"black" }} position="fixed">
        <Toolbar>
          <Stack direction="row" flex="1" gap="150px" ml="10px">
          <ThemeProvider theme={navbrand}>
            <Link to="/" className="navbrand">
              <Typography
                sx={{
                  fontSize: { lg: "25px", sm: "20px", xs: "18px" },
                }}
              >
                Stylecraft
              </Typography>
            </Link>
            </ThemeProvider>

            <Stack
              direction="row"
              className="navlink"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography className="navtext">HOME</Typography>
              </Link>

              <Link to="/products" style={{ textDecoration: "none" }}>
                <Typography className="navtext">SHOP</Typography>
              </Link>

              <ScrollLink to="contact" spy={true} smooth={true}  duration={600}>
                  <Typography className="navtext">CONTACT US</Typography>
              </ScrollLink>
            </Stack>
          </Stack>
          <Cart />
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
