import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'

const Sort = ({setSort}) => {
  return (
    <Stack>
    <FormControl
      sx={{ minWidth: { lg: "180px", xs: "130px" } }}
      size="small"
    >
      <InputLabel>Sort by</InputLabel>
      <Select
        sx={{ fontSize: { lg: "1rem", xs: "0.8rem" }, p:"2px" }}
        defaultValue="newest"
        label="Sort by "
        onChange={(e) => setSort(e.target.value)}
      >
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="asc">Price: Low to High</MenuItem>
        <MenuItem value="desc">Price: High to Low</MenuItem>
      </Select>
    </FormControl>
  </Stack>
  )
}

export default Sort