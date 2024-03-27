import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './sidebar.css'

import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SpeedIcon from '@mui/icons-material/Speed';

export default function SideBar(){
    return (
        <Box width={265} height='100%' pl={2} pb={2} position='fixed' top={0} left={0} bgcolor='white'>
            <Typography component='h1' fontSize={28} fontWeight={600} color='panelPrimary.main' mt={2}>News2Day</Typography>
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