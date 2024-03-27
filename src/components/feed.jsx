import { Box, Chip, Typography } from "@mui/material";

export default function Feed({feed}){
    return (
        <Box overflow='auto' maxHeight='75vh'>
            <Box
                component='img'
                src={feed.multimedia}
                alt=""
                width='100%'
                height='auto'
                sx={{display:'block', mx:'auto'}}
            />
            <Typography variant="h4" mt={2}>{feed.title}</Typography>
            <Chip color='info' sx={{mt:2}} label={feed.category}></Chip>
            <Typography mt={2}>{feed.createdAt}</Typography>
            <Typography mt={2}>{feed.content}</Typography>
            <Chip label={feed.status} sx={{mt:2}} color={`${feed.status === 'Draft'? 'warning': 'success'}`}></Chip>
        </Box>
    )
}