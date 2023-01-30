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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleCheckout = () => {
   dispatch(checkout());
    toast("Order Placed!",  {
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
              md: "500px",
              xs: "220px",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Typography
            textAlign="center"
            sx={{
              fontSize: { md: "30px", xs: "20px" },
              fontWeight: "bold",
              fontFamily: "Verdana",
              mt: "30px",
            }}
          >
            My Cart
          </Typography>
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
                width: { lg: "45%", xs: "60%", md: "40%" },
                alignSelf: "center",
                mt: "40px",
                gap: "20px",
              }}
            >
              {cart.map((item) => (
                <Badge key={item.id} badgeContent={item.quantity} color="error">
                  <Card
                    sx={{
                      height: { lg: "300px", xs: "200px", sm: "220px" },
                      width: { lg: "220px", md: "200px" },
                    }}
                    key={item.id}
                  >
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt="cart"
                      sx={{
                        objectFit: "contain",
                        height: { lg: "150px", xs: "80px" },
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        sx={{
                          textAlign: "center",
                          fontSize: { lg: "1.1rem", sm: "1rem", xs: "0.8rem" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          "-webkit-line-clamp": "1",
                          "-webkit-box-orient": "vertical",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: { lg: "1rem", xs: "0.75rem" },
                        }}
                      >
                        Rs.{item.price}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
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
                  </Card>
                </Badge>
              ))}
              <button className="btncheckout" onClick={handleCheckout}>
                Checkout
              </button>
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
          )}
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Cart;
