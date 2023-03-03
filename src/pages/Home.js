import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Stack className="banner-content">
        <Typography sx={{ mb: "30px", fontSize: { md: "20px", xs: "15px" } }}>
          NEW ARRIVAL
        </Typography>
        <Typography
          sx={{
            mb: "10px",
            fontSize: { lg: "90px", md: "75px", xs: "40px", sm: "60px" },
          }}
        >
          SPEAK YOUR STYLE
        </Typography>
        <Typography
          sx={{ mb: "20px", fontSize: { md: "20px", xs: "12px", sm: "15px" } }}
        >
          Flat 40% OFF
        </Typography>

        <Link to="/products">
          <button className="btnshop">
            <span>SHOP NOW</span>
          </button>
        </Link>
      </Stack>

      <Stack className="imgcontainer">
        <img
          src="https://drfurithemes.com/durotan/wp-content/uploads/sites/15/2021/09/slider-1-1-1.jpg"
          alt="homeimage"
          className="homeimg"
        />
      </Stack>
    </Box>
  );
};

export default Home;
