import { Box, CardMedia, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function QuickLink({title, img, link}){
    return (
        <Paper>
            <Link to={link}>
                <Box display='flex' alignItems='center' justifyContent='center' width={300} height={250} overflow='hidden' position='relative' sx={{cursor:'pointer'}}>
                    <CardMedia
                        component='img'
                        src={img}
                        sx={{width:'100%', "&:hover": {width:350}, maxWidth:500, filter:'contrast(95%)', transition:'all 0.5s ease-in-out'}}
                    />
                    <Typography position='absolute' fontSize={32} fontWeight={700} color='teal'>{title}</Typography>
                </Box>
            </Link>
        </Paper>
    )
}