import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SpeedIcon from '@mui/icons-material/Speed';

export default function SideBar(){
    return (
        <Box borderRight={1} borderColor='#aaa' width='20%' pl={2} pb={2} position='fixed' top='2rem'>
            <Typography component='h1' variant="h5" fontWeight={700} color='#222'>Admin panel</Typography>
            <Box mt={8}>
                <Box display='flex'>
                    <DashboardIcon/>
                    <NavLink className='nav-link' to='/'>Dashboard</NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <CreateIcon/>
                    <NavLink className='nav-link' to='/news-feed/create'>Create news feed</NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <EqualizerIcon/>
                    <NavLink className='nav-link' to='/news-feed/manage'>Manage news feeds</NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <SpeedIcon/>
                    <NavLink className='nav-link' to='/performance'>Performance</NavLink>
                </Box>

            </Box>
        </Box>
    )
}