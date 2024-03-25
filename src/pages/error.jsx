import { Box, Typography } from "@mui/material";

export default function Error(){
    return (
        <Box minHeight='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Typography>404 | page not found</Typography>
        </Box>
    )
}