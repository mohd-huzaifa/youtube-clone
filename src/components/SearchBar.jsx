import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {


  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  }

  return (
    <Paper
      component="form"
      onSubmit={(e) => { handleSubmit(e) }}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}
    >
      <input
        className='bg-white border-none p-1 outline-none focus:outline-none focus:border-none'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />

      <Search color="primary" />
      <IconButton type="submit" sx={{ p: '3px', color: 'red' }} />
    </Paper>
  )
}

export default SearchBar
