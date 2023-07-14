import logo from './logo.svg';
import './App.css';
import {Box} from '@mui/material'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Feed from './components/Feed'
import VedioDetail from './components/VedioDetail'


function App() {
  return (
    <>
     <BrowserRouter>
     <Box sx={{backgroundColor:'#000'}}>
       <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/channel/:id" exact element={<ChannelDetail/>}/>
        <Route path="/vedio/:id" exact element={<VedioDetail/>}/>
        <Route path="/search/:searchTerm" exact element={<SearchFeed/>}/>
      </Routes>

     </Box>
     </BrowserRouter>
    </>
  );
}

export default App;
