import {Box, Paper, Typography} from '@mui/material'

export default function StatusCard({statusObj}){
    return (
        <Paper sx={{width:125, p:2}}>
            <Typography fontWeight={600}>Feed status</Typography>
            <Box mt={2} display='flex' justifyContent='space-between' alignItems='center'>
                <Typography>Published</Typography>
                <Typography fontSize={28} fontWeight={700} color='success.light'>{statusObj.published}</Typography>                    
            </Box>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography>Draft</Typography>
                <Typography fontSize={28} fontWeight={700} color='warning.light'>{statusObj.draft}</Typography>
            </Box>
        </Paper>
    )
}