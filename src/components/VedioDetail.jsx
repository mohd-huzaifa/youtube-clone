import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import { FetchData } from '../utils/FetchDataFrom'
import Vedios from './Vedios'



function VedioDetail() {
  const { id } = useParams();
  const [vedioDetail, setVedioDetail] = useState(null)
  const [videos, setVideos] = useState([])


  useEffect(() => {

    FetchData(`videos/?part=snippet,statistics&id=${id}`).then((data) => {
      setVedioDetail(data.items[0]);
    })

    FetchData(`search/?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => {
      setVideos(data.items);
    })

  }, [id])
  console.log(vedioDetail)
  if (!vedioDetail?.snippet) {
    return "loading..."
  }

  console.log(videos)

  const { snippet: { title, channelId, channelTitle } } = vedioDetail
  return (
    <Box minHeight='100vh' color="white">
      <Stack direction={{ sm: 'column', md: 'row', position: 'sticky', top: '77px', overflowY: 'hidden' }}>
        <div className='w-full scrolling bg-black'>
          <Box sx={{ position: 'sticky', top: '77px', overflowY: 'hidden' }}>
              <div className="border h-96">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                  controls className='react-player'
                  width='100%'
                  height='100%' />
              </div>
              <Typography variant={{ sm: 'subtitle', md: 'h6', color: 'white' }} py={1} px={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: 1 }} />
                  </Typography>
                </Link>
              </Stack>
            </Box>
        </div>
        <div className='overflow-hidden scroll-smooth'>
          <div className=''>
            <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
              <Vedios vedios={videos} direction="column" />
            </Box>
          </div>
        </div>
      </Stack>


    </Box>
  )
}

export default VedioDetail
