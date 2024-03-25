import {Box} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import './App.css'
import SideBar from './components/sidebar/sidebar';

function App() {

  return (
  <>
    <Box display='flex' justifyContent='space-between' position='relative'>
      <SideBar/>
        <Box width='75%' marginLeft='auto'>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='*' element={<Error/>} />
        </Routes>
      </Box>
     </Box>
  </>
  )
}

export default App
