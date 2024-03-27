import {Box, Paper, Typography} from '@mui/material'
import useFeedContext from '../hooks/useFeedContext'

export default function Performance(){

    const {feed} = useFeedContext()

    return(
        <Box>
            <Paper sx={{width:'fit-content', p:2}}>
                <Typography>Top 5 most viewed feeds</Typography>
                {
                    feed.toSorted((a,b) => b.views-a.views).slice(0,5).map(f => (
                        <Box key={f.id} display='flex'>
                            <Typography>{f.title}</Typography>
                            <Typography>{f.views}</Typography>
                        </Box>
                    ))
                }
            </Paper>
        </Box>
    )
}