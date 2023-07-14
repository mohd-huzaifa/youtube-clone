import React from 'react'
import {Stack , Box} from '@mui/material'
import VedioCard from './VedioCard'
import ChannelCard from './ChannelCard'

function Vedios({vedios,direction}) {
    // console.log(vedios)

    if(!vedios?.length)return "Loading..."
  return (
      <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="space-around"
      gap={2}
      >

        {
            vedios.map((item,ind)=>{
                return(
                    <Box key={ind}>
                        {item.id.videoId && <VedioCard vedio={item}/>}
                        {item.id.channelId && <ChannelCard channelDetail={item}/>}
                    </Box>
                )
            })
        }

      </Stack>
  )
}

export default Vedios
