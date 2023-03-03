import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {
  Stack,
  Card,
  CardActions,
  CardMedia,
  CardContent,
} from "@mui/material";
import { products } from "../data";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/actions/cartaction";
import SearchProducts from "../components/SearchProducts";
import Sort from "../components/Sort";

const Products = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.id - b.id)
      );
    } else if (sort === "asc") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      const result = products.filter((product) =>
        product.title.toLowerCase().includes(search)
      );
      setFilteredProducts(result);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <Box>
      <Stack className="producttitle" sx={{ mt: "50px" }}>
        <img
          src="https://drfurithemes.com/durotan/wp-content/themes/durotan-child/images/shop_collection_banner.jpg"
          style={{ position: "relative", width: "100%", height: "auto" }}
        />
        <Stack
          sx={{ position: "absolute", alignItems: "center", color: "white" }}
        >
          <Typography
            sx={{
              fontSize: { lg: "60px", xs: "25px", sm: "40px" },
              fontWeight: "bold",
            }}
          >
            Products
          </Typography>
          <Typography sx={{ fontSize: { lg: "20px", xs: "10px", sm: "15px" } }}>
            This is where you can browse products in this store.
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={{ p: { md: "40px", xs: "4px" } }}>
        <Stack
          direction="row"
          sx={{
            p: { md: "20px 1px", xs: "20px 0px 20px" },
            justifyContent: "space-between",
          }}
        >
          <SearchProducts setSearch={setSearch} handleSearch={handleSearch} />
          <Sort setSort={setSort} />
        </Stack>

        {/* Displaying the products */}
        <Stack
          direction="row"
          sx={{
            justifyContent:
              search.length !== 0
                ? "flex-start"
                : { sm: "space-between", xs: "space-evenly" },
            flexWrap: "wrap",
            gap: { xs: "10px", lg: "30px", sm: "20px" },
            marginBottom: "50px",
            minHeight: "50vh",
            paddingX: "0",
          }}
        >
          {filteredProducts.length === 0 ? (
            <Typography
              sx={{
                fontSize: "30px",
                color: "gray",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              No Results
            </Typography>
          ) : (
            filteredProducts.map((product) => (
              <Card
                sx={{
                  height: "auto",
                  width: { lg: "250px", xs: "150px", sm: "200px" },
                  "&:hover": { boxShadow: 10 },
                  pb: "20px",
                }}
                key={product.id}
              >
                <CardMedia
                  component="img"
                  image={product.img}
                  sx={{
                    height: { xs: "200px", sm: "240px", lg: "260px" },
                    objectFit: "cover",
                  }}
                />

                <CardContent sx={{ paddingX: "5px" }}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: { lg: "1.25rem", sm: "1rem" },
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      "-webkit-line-clamp": "1",
                      "-webkit-box-orient": "vertical",
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{
                        fontSize: { lg: "1.25rem", sm: "1rem" },
                      }}
                    >
                      Rs.{product.price}
                    </Typography>
                  </Stack>
                </CardContent>

                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: "0px 16px",
                  }}
                >
                  <button
                    className="btncart"
                    onClick={() => dispatch(addtoCart(product))}
                  >
                    Add to Cart
                  </button>
                </CardActions>
              </Card>
            ))
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Products;
