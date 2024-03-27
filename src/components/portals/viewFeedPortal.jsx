import { Box } from "@mui/material";
import {createPortal} from 'react-dom'

export default function ViewFeedPortal({children}){
    return (
        createPortal(<Box>{children}</Box>, document.getElementById('view-feed-portal'))
    )
}