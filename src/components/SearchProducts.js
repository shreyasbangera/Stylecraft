import React from 'react'
import { IconButton, Stack } from '@mui/material'
import SearchOutlined  from '@mui/icons-material/Search';

const SearchProducts = ({setSearch, handleSubmit}) => {
  return (
    <Stack>
    <form onSubmit={handleSubmit}>
      <input className="search"
        style={{ padding: "10px"}}
        type="text"
        placeholder="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <IconButton color="inherit">
        <SearchOutlined />
      </IconButton>
    </form>
  </Stack>
  )
}

export default SearchProducts