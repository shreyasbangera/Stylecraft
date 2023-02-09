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
    } else{
      setFilteredProducts(products)
    }
  };

  return (
    <Box>
      <Stack className="producttitle">
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Products
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          m: { md: "20px 30px 20px", xs: "20px 0px 20px" },
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
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: { xs: "10px", lg: "30px", sm: "20px" },
          marginBottom: "50px",
          minHeight: "50vh",
        }}
      >
        {filteredProducts.length === 0 ? (
          <Typography
            sx={{ alignSelf: "center", fontSize: "30px", color: "gray" }}
          >
            No Results
          </Typography>
        ) : (
          filteredProducts.map((product) => (
            <Card
              sx={{
                height: { lg: "400px", xs: "300px", md: "350px" },
                width: { lg: "300px", xs: "150px", sm: "220px" },
                "&:hover": { boxShadow: 10 },
              }}
              key={product.id}
            >
              <CardMedia
                component="img"
                image={product.img}
                sx={{
                  height: { lg: "200px", xs: "120px", md: "180px" },
                  objectFit: "contain",
                }}
              />

              <CardContent>
                <Typography
                  gutterBottom
                  textAlign="center"
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
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: { lg: "1.25rem", sm: "1rem" },
                  }}
                >
                  Rs.{product.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
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
    </Box>
  );
};

export default Products;
