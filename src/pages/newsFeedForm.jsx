import { Box } from "@mui/material";
import NewsForm from '../components/newsForm/newsForm'

export default function NewsFeedForm(){
    return (
        <Box px={4}>
           <NewsForm
                header='Create new feed'
           />
        </Box>
    )
}