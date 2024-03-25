import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

import {Box} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Dashboard = lazy(() => import('./pages/dashboard'))
const FeedForm = lazy(() => import('./pages/newsFeedForm'))
const ManageFeed = lazy(() => import('./pages/newsFeed'))
const Performance = lazy(() => import('./pages/performance'))
const Error = lazy(() => import('./pages/error'))

import SideBar from './components/sidebar/sidebar';

function App() {

  return (
  <>
    <Box display='flex' justifyContent='space-between' position='relative'>
      <SideBar/>
        <Box mt={4} width='75%' marginLeft='auto'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/news-feed'>
                <Route path='create' element={<FeedForm/>}/>
                <Route path='manage' element={<ManageFeed/>}/>
              </Route>
              <Route path='/performance' element={<Performance/>}/>
              <Route path='*' element={<Error/>} />
            </Routes>
          </Suspense>
        </Box>
    </Box>
  </>
  )
}

export default App
