import React from 'react'
import { IconButton, Stack } from '@mui/material'
import SearchOutlined  from '@mui/icons-material/Search';

const SearchProducts = ({setSearch, handleSearch}) => {
  return (
    <Stack>
    <form onSubmit={handleSearch}>
      <input className="search"
        style={{ padding: "10px"}}
        type="text"
        placeholder="Search"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button style={{border:"none"}}>
      <IconButton color="inherit">
        <SearchOutlined />
      </IconButton>
      </button>
    </form>
  </Stack>
  )
}

export default SearchProducts