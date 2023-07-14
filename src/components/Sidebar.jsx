import React, { useState } from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/constants'
function Sidebar({selectedCategory,setSelectedCategory}) {
    // const [selectedCategory,setSelectedCategory] = useState("New");
  return (
   <Stack
    direction="row"
    sx={{
        overflowY:"auto",
        height:{sx:'auto',md:'95%'},
        widht:{sx:'auto',md:'30%'},
        flexDirection:{md:'column'}
    }}
   >
   {
        categories.map((item)=>{
            return(
                <button className='flex w-48 text-white mx-2 px-1 my-1 rounded-full hover:bg-neutral-900 hover:text-slate-950'
                style={{
                    background: selectedCategory === item.name && '#fc1503',
                    color : 'white'
                } }
                key={item.name}
                onClick={()=>{setSelectedCategory(item.name)}}
                >
                    <span className='mx-2 my-auto align-items-center py-auto text-truncated'
                    style={{
                       color: selectedCategory === item.name ? 'white' : 'red'
                    }}
                    >{item.icon}</span>
                    <span className="font-serif mx-2 align-items-center my-auto py-auto"
                    style={{
                        opacity: selectedCategory === item.name ? 1:0.8
                    }}
                    ><div>{item.name}</div></span>                  
                </button>
            )
        })
   }
   </Stack>
  )
}

export default Sidebar
