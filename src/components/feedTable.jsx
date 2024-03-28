// import ViewFeedPortal from '../components/portals/viewFeedPortal'
import { Box, Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFeedContext from "../hooks/useFeedContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import Feed from "./feed";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";


export default function FeedTable({cols, actions}){

    const {feed, dispatch} = useFeedContext()
    const [viewFeed, setViewFeed] = useState({})
    const navigate = useNavigate()

    return (
        <Box>
            {feed.length ? <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {
                            cols.map((col, index) => (
                                <TableCell key={col} sx={{textTransform:'capitalize'}} align={index > 0? 'right' : 'left'}>{col}</TableCell>
                            ))
                        }
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {feed.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            {
                                cols.map((col, index) => (
                                    <TableCell key={col} width={index === 0 && '40%'} align={index > 0 ? 'right' : 'left'}>{row[col]}</TableCell>
                                ))
                            }
                        <TableCell align="right">
                            {actions.view && <VisibilityIcon onClick={() => setViewFeed(row)} color='info' sx={{fontSize:18, cursor:'pointer'}}/>}
                            
                            {actions.edit && <EditIcon onClick={() => {dispatch({type:'EDIT_FEED', payload:row.id}); navigate('/news-feed/edit')}} color='secondary' sx={{ml:1, fontSize:18, cursor:'pointer'}}/>}

                            {actions.delete && <DeleteIcon onClick={() => {dispatch({type:'DELETE_FEED', payload:row.id})}} color='error' sx={{ml:1, fontSize:18, cursor:'pointer'}}/>}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>: <Typography>No feed</Typography>}
            <Box zIndex={5} display={`${'title' in viewFeed ? 'block': 'none'}`} position='fixed' top={25} right={{xs: 25, lg: 75}} left={{xs:25, lg: 75}} bgcolor='white' boxShadow={24} borderRadius={2} p={4}>
                <CloseIcon onClick={() => setViewFeed({})} sx={{ml:'auto', display:'block', cursor:'pointer'}}/>
                <Feed feed={viewFeed}/>
            </Box>
        </Box>
    )
}

