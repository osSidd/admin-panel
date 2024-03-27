import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SpeedIcon from '@mui/icons-material/Speed';
import CloseIcon from '@mui/icons-material/Close';

export default function SideBar({toggleSideBar, displaySideBar}){

    return (
        <Box sx={{transform: {xs: `translateX(${toggleSideBar ? '-290px' : '0'})`, lg: 'translateX(0)'}, transition: 'transform 0.5s ease-in-out'}} width={265} height='100%' pl={2} pb={2} position='fixed' top={0} left={0} bgcolor='white' zIndex={2} boxShadow={{xs:5, lg:0}}>
            <Box display='flex' alignItems='center' justifyContent='space-between' mt={2} pr={2}>
                <Typography component='h1' fontSize={28} fontWeight={600} color='panelPrimary.main'>News2Day</Typography>
                <Box onClick={() => displaySideBar(true)} sx={{color: 'lightText.main'}} display={{xs: 'block', lg:'none'}}>
                    <CloseIcon/>
                </Box>
            </Box>
            <Box mt={24}>
                <Box display='flex'>
                    <NavLink className='nav-link' to='/'>
                        <DashboardIcon sx={{mr:2}}/>
                        <span>Dashboard</span></NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <NavLink className='nav-link' to='/news-feed/create'>
                        <CreateIcon sx={{mr:2}}/>
                        <span>Create news feed</span>
                    </NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <NavLink className='nav-link' to='/news-feed/manage'>
                        <EqualizerIcon sx={{mr:2}}/>
                        <span>Manage news feeds</span>
                    </NavLink>
                </Box>
                <Box display='flex' mt={2}>
                    <NavLink className='nav-link' to='/performance'>
                        <SpeedIcon sx={{mr:2}}/>
                        <span>Performance</span>
                    </NavLink>
                </Box>

            </Box>
        </Box>
    )
}