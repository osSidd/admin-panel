import { Box, Typography } from "@mui/material";
import useFeedContext from "../hooks/useFeedContext";

export default function ManageFeed(){

    const {feed} = useFeedContext()

    return (
        <Box>
            <Typography component='h2' variant="h2">Manage news feed</Typography>
            {
                feed.map(f => (
                    <div key={f.id}>
                        <p>{f.title}</p>
                    </div>
                ))
            }
        </Box>
    )
}