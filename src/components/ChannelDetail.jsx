import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Vedios from './Vedios'
import ChannelCard from './ChannelCard'
import { FetchData } from '../utils/FetchDataFrom'

function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [vedios, setVedios] = useState([]);


  useEffect(() => {

    FetchData(`channels/?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    })

    FetchData(`search/?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVedios(data?.items)
    })


  }, [id])

  // console.log(channelDetail, vedios)
  return (
    <Box minHeight='95vh'>
      <Box>
        <div
          style={{
            // backgroundColor:'red',
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(237,28,211,1) 0%, rgba(0,212,255,1) 95%)',
            zIndex:10,
            height:'150px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={'-100px'}/>
      </Box>
      <Box display="flex" p='2'>
             <Box sx={{mr:{sm:'100px'}}}/>
              <Vedios vedios={vedios}/>
             
      </Box>
    </Box>
  )
}

export default ChannelDetail
