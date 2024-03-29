import { Suspense, lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

import {Box} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Dashboard = lazy(() => import('./pages/dashboard'))
const FeedForm = lazy(() => import('./pages/newsFeedForm'))
const EditFeed = lazy(() => import('./pages/editNewsFeed'))
const ManageFeed = lazy(() => import('./pages/newsFeed'))
const Performance = lazy(() => import('./pages/performance'))
const About = lazy(() => import('./pages/about'))
const Error = lazy(() => import('./pages/error'))

import SideBar from './components/sidebar/sidebar';
import AdminBar from './components/adminbar/adminBar';

function App() {

  const [toggleSideBar, setToggleSideBar] = useState(false)

  function displaySideBar(state){
    setToggleSideBar(state)
  }

  return (
  <>
    <Box minHeight='100vh' position='relative' bgcolor='#f4f4f5'>
      <SideBar toggleSideBar={toggleSideBar} displaySideBar={displaySideBar}/>
        <Box width={{xs:'100%', lg:'78%'}} ml='auto' py={4}>
        <Box px={4}>
          <AdminBar toggleSideBar={toggleSideBar} displaySideBar={displaySideBar}/>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/news-feed'>
                <Route path='create' element={<FeedForm/>}/>
                <Route path='edit' element={<EditFeed/>} />
                <Route path='manage' element={<ManageFeed/>}/>
              </Route>
              <Route path='/about' element={<About/>}/>
              <Route path='/performance' element={<Performance/>}/>
              <Route path='*' element={<Error/>} />
            </Routes>
          </Suspense>
        </Box>
        </Box>
    </Box>
  </>
  )
}

export default App
