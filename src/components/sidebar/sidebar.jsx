import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import './sidebar.css'

export default function SideBar(){
    return (
        <Box borderRight={1} borderColor='#aaa' width='20%' pl={2} pb={2} position='fixed' top='2rem'>
            <Typography component='h1' variant="h5" fontWeight={700} color='#222'>Admin panel</Typography>
            <Box mt={8}>
                <NavLink className='nav-link' to='/'>Dashboard</NavLink>
                <NavLink className='nav-link' to='/news-feed/create'>Create news feed</NavLink>
                <NavLink className='nav-link' to='/news-feed/manage'>Manage news feeds</NavLink>
                <NavLink className='nav-link' to='/performance'>Performance</NavLink>
            </Box>
        </Box>
    )
}