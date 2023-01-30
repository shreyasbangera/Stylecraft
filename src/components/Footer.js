import { Box, Stack, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { navbrand } from '../utils/theme'
import {Twitter, Instagram, Facebook, YouTube } from '@mui/icons-material';


const Footer = () => {
    
  return (
    <Box className="footer">
    <ThemeProvider theme ={navbrand}>
    <Stack >
    <Typography sx={{fontSize:"40px"}} >Stylecraft</Typography>
    </Stack>
    </ThemeProvider>
    <Stack className='contact'>
    <Typography>
    <h3>CONTACT US</h3>
    </Typography>
    <Typography sx={{color:"grey"}}>
    Phone: +1 (0) 000 0000 001 <br />
    Email: email@stylecraft.com<br />
    Address: Stylecraft, ABC Layout, Bangalore</Typography>
    </Stack>
    <Stack direction="row" sx={{alignItems:"center", gap:"1rem"}}>
    <Instagram />
    <Twitter />
    <Facebook />
    <YouTube />
    </Stack>
    </Box>
   
  )
}

export default Footer