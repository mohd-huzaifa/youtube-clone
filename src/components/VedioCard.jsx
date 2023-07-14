import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'


function VedioCard({ vedio }) {
    // console.log(vedio)
    const { snippet, id } = vedio;
    console.log(id)
    const { videoId } = id;
    console.log(videoId)
    return (
        <Card sx={{ width: {  xs: '100%',sm:'558px',md: '340px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/vedio/${videoId}` : '122345676543'}>

                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {
                       xs:'100%',sm:'558px',md:'340px'
                    }, height: '180px' }}
                />
            </Link>
            <CardContent
                sx={{
                    backgroundColor: '#000',
                    height: '106px'
                }}
            >
                <Link to={videoId ? `/vedio/${videoId}`:'1234567'}>
                    <Typography variant='subtitle1' fontWeight="bold" color="white">
                        <div className='text-sm font-serif'>
                            {snippet?.title.slice(0, 60) || "yaar pagal pan mat karo dikh bhi raha hoga ki yeh exists nai karta hai"}
                        </div>
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:null}>
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {snippet?.channelTitle || "yeh wala channel exist ahi karta bhai"}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>


            </CardContent>
        </Card>
    )
}

export default VedioCard
