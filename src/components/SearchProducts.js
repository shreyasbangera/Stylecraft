import React from 'react'
import { IconButton, Stack } from '@mui/material'
import SearchOutlined  from '@mui/icons-material/Search';

const SearchProducts = ({setSearch, handleSearch}) => {
  return (
    <Stack>
    <form onSubmit={handleSearch}>
      <input 
        style={{ padding: "10px", borderRadius:"4px", border:"1px solid"}}
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