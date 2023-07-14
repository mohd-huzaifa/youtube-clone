import axios from 'axios'

const BASE_URL = 'https://youtube-v311.p.rapidapi.com';


const options = {
    params:{
     part: 'snippet',
     maxResults: '15'

    },
    headers: {
      // 'X-RapidAPI-Key':'32aa61ea21msh6d2a3f9d57eead8p143115jsnbb1d3f789685',
      // 'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
      'X-RapidAPI-Key': '06f65b592dmshe6b94eae92f3f0ep19c1f2jsn73f5416e3102',
      'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };
  

  export const FetchData = async (url)=>{    
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }