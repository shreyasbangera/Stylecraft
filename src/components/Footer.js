import { Box, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { navbrand } from "../utils/theme";
import { Twitter, Instagram, Facebook, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box id="contact" className="footer">
      <ThemeProvider theme={navbrand}>
        <Stack>
          <Typography sx={{ fontSize: { md: "40px", xs: "30px" } }}>
            Stylecraft
          </Typography>
        </Stack>
      </ThemeProvider>
      <Stack className="contact">
        <Typography>
          <Typography sx={{ fontSize: { md: "30px", xs: "18px" } }}>
            CONTACT US
          </Typography>
        </Typography>
        <Typography
          sx={{ color: "grey", fontSize: { md: "20px", xs: "10px" } }}
        >
          Phone: +1 (0) 000 0000 001 <br />
          Email: email@stylecraft.com
          <br />
          Address: Stylecraft, ABC Layout, Bangalore
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ alignItems: "center", gap: "1rem" }}>
        <Instagram />
        <Twitter />
        <Facebook />
        <YouTube />
      </Stack>
    </Box>
  );
};

export default Footer;
