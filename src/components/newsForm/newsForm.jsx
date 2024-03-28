import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import useFeedContext from "../../hooks/useFeedContext";
import { useNavigate } from "react-router-dom";
import phone from '../../assets/phone.png'
import Feed from "../../components/feed";
import CloseIcon from '@mui/icons-material/Close';


export default function NewsForm({feed}){

    const {dispatch} = useFeedContext()
    const navigate = useNavigate()

    const contentRef = useRef()

    const [displayMobile, setDisplayMobile] = useState(false)
    const [error, setError] = useState({title: '', content: ''})
    const [feedForm, setFeedForm] = useState({
        title: feed? feed.title : '',
        category: feed ? feed.category : 'Politics',
        multimedia: feed ? feed.multimedia : {url: '', type: ''},
    })

    function handleChange(e){
        const {name, value, files} = e.target
        setFeedForm(prev => ({
            ...prev,
            [name]: name === 'multimedia' ? {url: URL.createObjectURL(files[0]), type: files[0].type} : value
        }))
    }
    console.log(feedForm)
    function hasError(){
        if(!feedForm.title){
            setError(prev => ({content: '', title: 'title required'}))
            return true
        }

        else if(!contentRef.current.value){
            setError(prev => ({content: 'content required', title: ''}))
            return true
        }
    }

    function submitForm(id){
        if(hasError()) return 
        dispatch({
            type: feed ? 'UPDATE_FEED' : 'ADD_FEED',
            payload: feed ? 
                {
                    id: feed.id,
                    feed: {
                        ...feedForm,
                        status: id,
                        content: contentRef.current?.value,
                        createdAt: new Date().toLocaleDateString()
                    }
                }
            : {
                ...feedForm,
                status: id,
                content: contentRef.current?.value,
                createdAt: new Date().toLocaleDateString()
            }
        })
        setFeedForm({
            title: '',
            category: 'Politics',
            multimedia: '',
        })
        contentRef.current = ''
        navigate('/news-feed/manage')
    }

    const mobileFeed = {
        title : feed ? feed.title : feedForm.title,
        category: feed ? feed.category : feedForm.category,
        content: feed ? feed.content : contentRef.current?.value,
        multimedia: feed ? feed.multimedia : feedForm.multimedia,
        status: feed ? feed.status : 'Draft',
        createdAt: feed ? feed.createdAt : new Date().toLocaleDateString()
    }

    return (
        <Box bgcolor='white' p={2} borderRadius={2} boxShadow={4}>

            <Box
                component='form'
                my={2}
            >
                {feed && <Typography mb={4} fontWeight={600}>{'Edit: feed id - ' + feed.id}</Typography>}
                <TextField
                    variant='outlined'
                    label='News title'
                    fullWidth
                    name="title"
                    value={feedForm.title}
                    onChange={handleChange}
                />
                <Typography mt={1} color='error'>{error.title}</Typography>
                <Box sx={{ minWidth: 120 }} mt={3}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">Category</InputLabel>
                    <Select
                    labelId="select-label"
                    id="select"
                    name="category"
                    value={feedForm.category}
                    label="Category"
                    onChange={handleChange}
                    >
                    <MenuItem value='Politics'>Politics</MenuItem>
                    <MenuItem value='Sports'>Sports</MenuItem>
                    <MenuItem value='Entertainment'>Entertainment</MenuItem>
                    </Select>
                </FormControl>
                </Box>
                <Box mt={3}>
                    <InputLabel>Multimedia</InputLabel>
                    <TextField
                        variant="outlined"
                        type="file"
                        fullWidth
                        name="multimedia"
                        onChange={handleChange}
                        inputProps={{accept: 'image/*, video/*'}}
                    />
                </Box>
                <TextField
                    variant='outlined'
                    label='News content'
                    name='content'
                    fullWidth
                    multiline
                    rows={10}
                    sx={{mt:3}}
                    inputRef={contentRef}
                    defaultValue={feed ? feed.content : ''}
                />
                <Typography mt={1} color='error'>{error.content}</Typography>
                <Box display='flex' alignItems='center' mt={4}>
                    <Button onClick={() => submitForm('Draft')} sx={{bgcolor:'burlywood'}} variant='contained'>Save draft</Button>
                    <Button onClick={() => submitForm('Published')} color='panelPrimary' sx={{color:'white', ml:2}} variant='contained'>Publish feed</Button>
                    <Button onClick={() => setDisplayMobile(true)} color='panelPrimary' sx={{ml:'auto'}}>Mobile preview</Button>
                </Box>
            </Box>
            <Box zIndex={5} display={displayMobile ? 'block': 'none'} width='fit-content' position='absolute' top={25} right={{xs:25, lg:125}}>
                <Box position='relative'>
                    <Box
                        component='img'
                        src={phone}
                        width={{xs:320, lg:375}}
                        bgcolor='white'
                    />
                    <Box position='absolute' top={75}>
                        <Feed mobile={true} feed={mobileFeed}/>    
                    </Box>
                    <CloseIcon onClick={() => setDisplayMobile(false)} sx={{fontSize:32, position:'absolute', bottom:70, right:{xs:135, lg:100}, cursor:'pointer'}}/>
                </Box>
            </Box>
        </Box>
    )
}