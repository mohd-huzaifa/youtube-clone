import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Vedios from './Vedios'
import { FetchData } from '../utils/FetchDataFrom'
import {useParams} from 'react-router-dom'
function SearchFeed() {

  // const [searchTerm,setSearchTerm] = useState("")
  const {searchTerm} =  useParams();
  const [vedios, setVedios] = useState([])

  useEffect(() => {

    FetchData(`search/?part=snippet&q=${searchTerm}`).then((data) => {
      setVedios(data.items);
      //  console.log(data)
    })

  }, [searchTerm])
  return (
    <Box sx={{ overflowY: 'auto', pl: 2, flex: 2 , justifyContent:'center',overflowX:'hidden' }}>
      <Typography variant="h4"
        fontWeight="bold"
        flexDirection="row"
        mb={2}
        sx={{
          color: 'white',
          display: "block",
          width: '100%',
          // border:'1px solid green'
        }}
      > Search result for: <span style={{ color: '#f31503' }}>{searchTerm}</span>
      </Typography>
      <Vedios vedios={vedios} />
    </Box>
  )
}

export default SearchFeed
