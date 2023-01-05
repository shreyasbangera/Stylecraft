import React,{ useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Stack, Card, CardActions, CardMedia, CardContent, FormControl, Select, MenuItem, InputLabel } from '@mui/material'
import { products } from '../data'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/actions/cartaction'

const Products = () => {

  const dispatch = useDispatch();
  const [sort, setSort] = useState("newest")
  const [sortedProducts, setSortedProducts] = useState(products)
  
  useEffect(() => {
    if( sort === "newest"){
      setSortedProducts((products)=>[...products].sort((a,b)=> a.id - b.id))
    }
    else if( sort === "asc"){
      setSortedProducts((products)=>[...products].sort((a,b)=> a.price - b.price))
    }
    else{
      setSortedProducts((products)=>[...products].sort((a,b)=> b.price - a.price))
    }
  },[sort])

  return (
    <Box>
    <Stack className="producttitle">
    <Typography sx={{fontSize:"30px", fontWeight:"bold"}}>
      Products
    </Typography>
    </Stack>

    <Stack sx={{alignItems:"end", m:{md:"20px 30px 20px", xs:"20px 0px 20px"}}}>
    <FormControl  sx={{m:1, minWidth:{lg:"180px", xs:"150px"} }} size="small">
    <InputLabel>Sort by</InputLabel>
    <Select sx={{fontSize:{lg:"1rem", xs:"0.8rem"}}} defaultValue="newest" label="Sort by "
    onChange={(e)=> setSort(e.target.value)}>
    <MenuItem value="newest" >Newest</MenuItem>
    <MenuItem value ="asc">Price: Low to High</MenuItem>
    <MenuItem value ="desc">Price: High to Low</MenuItem>
    </Select>
    </FormControl>
    </Stack>

    <Stack direction="row" sx={{justifyContent:"center", flexWrap:"wrap", gap:{ xs:"10px",lg:"30px", sm:"20px" }}}  >
    {sortedProducts.map((product)=>(
    <Card sx={{height:{lg:"400px", xs:"300px", md:"350px"}, width:{ lg:"300px",xs:"150px", sm:"220px" }}} key={product.id}>
    <CardMedia component="img" image={product.img} sx={{ height:{ lg:"200px", xs:"120px", md:"180px" }, objectFit:"contain"}} />

      <CardContent>
        <Typography gutterBottom  textAlign="center" sx={{
          fontSize:{lg:"1.25rem", sm:"1rem"},
          overflow:"hidden", 
          textOverflow: "ellipsis",
          display:"-webkit-box",
          "-webkit-line-clamp": "1",
          "-webkit-box-orient":"vertical"
           }}>
         {product.title}
        </Typography>
        <Typography sx={{textAlign:"center", fontWeight:"bold", fontSize:{lg:"1.25rem", sm:"1rem"}}}>Rs.{product.price}</Typography>
      </CardContent>

      <CardActions sx={{display:"flex", flexDirection:"column"}}>
        <button  className='btncart' onClick={() => dispatch(addtoCart(product))}>Add to Cart</button>
      </CardActions>

    </Card>
        ))}
    </Stack>
    </Box>
  )
}

export default Products;