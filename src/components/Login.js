import React,{ useState } from 'react'
import { Box, Modal, Typography, Button, Stack, TextField } from '@mui/material'

const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
    <Button onClick={() => setOpen(true)} sx={{fontSize: {lg:"14px", xs:"12px"}, mr:{lg:"20px"}, textDecoration: "none", color: "white"}}>LOGIN</Button>
    <Modal open={open} onClose={() => setOpen(false)} >
      <Box className='loginmodal'>
        <Typography sx ={{marginBottom:"20px"}}variant="h6" component="h2">
        LOGIN
        </Typography>
        
        <Stack  direction= "column" component="form" sx={{gap: 3}}>
        <TextField label="Email" />
        <TextField label="Password" />
        <button className='btnblack'>Login</button>
        </Stack>
        </Box>

    </Modal>
    </div>
  )
}

export default Login