import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Vedios from './Vedios'
import { FetchData } from '../utils/FetchDataFrom'

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [vedios, setVedios] = useState([])

  useEffect(() => {

    FetchData(`search/?part=snippet&q=${selectedCategory}`).then((data) => {
      setVedios(data.items);
      //  console.log(data)
    })

  }, [selectedCategory])
  return (
    <Stack
      sx={{
        flexDirection: { sx: 'column', md: 'row' }
      }}>
      <Box
        sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box sx={{ overflowY: 'auto', pl: 2, flex: 2 }}>
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
        > {selectedCategory} <span style={{ color: '#f31503' }}>Videos</span>
        </Typography>

        <Vedios vedios={vedios} />
      </Box>



    </Stack>
  )
}

export default Feed
