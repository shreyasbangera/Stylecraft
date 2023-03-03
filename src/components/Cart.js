import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  Drawer,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector, useDispatch } from "react-redux";
import { checkout, removefromCart } from "../redux/actions/cartaction";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


  const handleCheckout = () => {
    dispatch(checkout());
    toast("Order Placed!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Box>
      <IconButton
        onClick={() => setOpen(true)}
        size="small"
        color="inherit"
        sx={{ mr: 1 }}
      >
        <Badge badgeContent={count} color="error">
          <ShoppingBagIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Stack
          sx={{
            width: {
              lg: "500px",
              sm: "400px",
              md: "500px",
              xs: "250px",
            }
          }}
        > 
        <Stack sx={{px:"10%"}}>
          <Stack
            direction="row"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "30px", xs: "20px" },
                fontFamily: "Verdana",
                mt: "30px",
                pb: "30px",
                width: "100%",
                borderBottom: "1px solid grey",
              }}
            >
              Cart ({count})
            </Typography>
            <IconButton onClick={() => setOpen(false)} color="inherit">
              <CloseIcon />
            </IconButton>
          </Stack>
          {cart.length === 0 ? (
            <Stack className="emptybag">
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "20px",
                  opacity: "0.6",
                  fontWeight: "bold",
                }}
              >
                Cart is Empty
              </Typography>
            </Stack>
          ) : (
            <Stack
              sx={{
                width: "100%",
                alignSelf: "center",
                mt: "40px",
                gap: "20px",
                pb: "50px",
              }}
            >
              {cart.map((item) => (
                <Badge key={item.id} badgeContent={item.quantity} color="error">
                  <Card
                    sx={{
                      height: "auto",
                      width: "100%",
                      display: "flex",
                    }}
                    key={item.id}
                  >
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt="cart"
                      sx={{
                        objectFit: "cover",
                        maxWidth: { md: "200px", xs: "40%" },
                        height: { md: "200px", xs: "100%" },
                      }}
                    />
                    <Stack sx={{ py: "10px", width: "100%" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          sx={{
                            fontSize: {
                              lg: "1.1rem",
                              sm: "1rem",
                              xs: "0.8rem",
                            },
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            "-webkit-line-clamp": "2",
                            "-webkit-box-orient": "vertical",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: { lg: "1rem", xs: "0.75rem" },
                          }}
                        >
                          Rs.{item.price}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          pt: "0",
                          pl: "16px",
                          height: "100%",
                          alignItems: "flex-end",
                        }}
                      >
                        <button
                          className="btnremove"
                          onClick={() =>
                            dispatch(removefromCart(item.id, item.quantity))
                          }
                        >
                          Remove
                        </button>
                      </CardActions>
                    </Stack>
                  </Card>
                </Badge>
                
              ))}
            </Stack>
          )}
          </Stack>
          {cart.length!==0&&
              <Stack sx={{position:"sticky", bottom:"0", right:"0", width:"100%", p:"10px", gap:"10px", background:"white"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <Typography sx={{fontSize:"20px"}}>Subtotal</Typography>
              <Typography sx={{fontSize:"20px"}}>RS.{subtotal}</Typography>
              </div>
              <button className="btncheckout" onClick={handleCheckout}>
                Checkout
              </button>
              </Stack>
          }
              <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Cart;
