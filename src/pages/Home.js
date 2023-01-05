import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Homeimg from '../assets/clothes.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Box>
    <Stack className='banner-content' >
    <Typography sx={{ mb:"10px", fontSize:{md:"50px", xs:"15px", sm:"30px"}, fontWeight:"bold" }}>WE SELL LIFESTYLE</Typography>
    <Typography sx={{ mb:"20px", fontSize:{md:"20px", xs:"12px", sm:"15px"}}}>Flat 40% OFF</Typography>

    <Link to="/products">
    <button  className="btnshop">SHOP NOW</button>
    </Link> 
    </Stack>
    
    <Stack className='imgcontainer'>
    <img src ={Homeimg} alt = 'homeimage' className="homeimg" />
    </Stack>
    </Box>
   
  )
}

export default Home