import React from 'react';
import { AppBar, Box, Toolbar, Typography, Stack, } from '@mui/material';
import { Link } from 'react-router-dom'
import Login from './Login';
import Cart from './Cart';

const Navbar = () => {
  
  return (
    <Box>
      <AppBar sx={{background:"black"}} position="fixed">
        <Toolbar>
        <Stack direction= "row" flex = "1" gap="150px" ml="10px">
        <Link to="/" className="navbrand" >
          <Typography  sx={{ fontFamily:"Verdana", fontSize:{lg:"20px",sm:"20px", xs:"15px"}}} >STYLECRAFT</Typography>
          </Link>

          <Stack direction= "row" className='navlink' sx={{display:{xs:"none", md:"flex"}}}>
          <Link to="/" style={{textDecoration:"none"}}>
          <Typography className="navtext">HOME</Typography>
          </Link>

          <Link to = "/products" style={{textDecoration:"none"}} >
          <Typography className="navtext">SHOP</Typography>
          </Link>

          <Stack>
          <Link to ="/" style={{textDecoration:"none"}}>
          <Typography className="navtext">CONTACT US</Typography>
          </Link>
          </Stack>
          </Stack>
          </Stack>
          <Cart /> 
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

