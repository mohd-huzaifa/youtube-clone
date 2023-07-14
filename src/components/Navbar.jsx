import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import SearchBar from './SearchBar'

function Navbar() {
  return (
   <Stack direction="row"
   alignItems="center"
   p={2}
   sx={{justifyContent:"space-between",position:'sticky',top:0,background:'#000'}}
   >

    <Link to="/" style={{display:'flex',alignItems:'center'}}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToD2IZy_i00aDEF9dl8rk7BnpUe8Hcv72g3VoRQYQ&s" alt="" 
         height={45}
         width={45}
         className='rounded-full'
         />
    </Link>
    <SearchBar/>

   </Stack>
  )
}

export default Navbar
