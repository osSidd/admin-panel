import { Box } from "@mui/material";
import NewsForm from '../components/newsForm/newsForm'
import useFeedContext from "../hooks/useFeedContext";

export default function EditNewsFeed(){

    const {feed_edit} = useFeedContext()

    return (
        <Box>
           <NewsForm feed={feed_edit}/>
        </Box>
    )
}