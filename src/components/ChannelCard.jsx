import React from 'react'
import {Card , CardContent , CardMedia ,Typography,  Box} from "@mui/material"
import {CheckCircle} from '@mui/icons-material'
import {Link} from 'react-router-dom'


function ChannelCard({channelDetail,marginTop}) {
    console.log("hello")
  return (
    <>
     <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      marginTop
     }}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
        sx={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',color:'#fff'}}
        >

          <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3',mx:'auto'}}
          />
          <Typography variant="h6">
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
          {
            channelDetail?.statistics?.subscriberCount && (
              <Typography >
                  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} subscriber
              </Typography>
            )
          }  

        </CardContent>
      </Link>

     </Box>
    </>
  )
}

export default ChannelCard
