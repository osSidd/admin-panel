import { Avatar, Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function AdminBar({toggleSideBar, displaySideBar}){
    return (
        <Box bgcolor='white' borderRadius={2} py={1.5} px={2} mb={4} boxShadow={2} display='flex' alignItems='center' justifyContent='space-between'>
            <Box onClick={() => displaySideBar(false)} display={{xs:'block', lg:'none'}}>
                <MenuIcon/>
            </Box>
            <Box ml='auto' width='fit-content' display='flex' alignContent='center'>
                <Box mr={2}>
                    <Typography>John Doe</Typography>
                    <Typography textAlign='right' fontWeight={300} fontSize={14}>Admin</Typography>
                </Box>
                <Box>
                    <Avatar src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1711518591~exp=1711519191~hmac=d76b0c202d0c675845ab48d99f30ad4bce232b18f62788320f667b8d73381019"/>
                </Box>
            </Box>
        </Box>
    )
}