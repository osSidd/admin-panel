import {Box, Link, List, ListItem, ListItemText, Typography} from '@mui/material'

export default function About(){
    return(
        <Box>
            <Typography variant='h4' component='h1' color='panelPrimary.main'>Admin panel</Typography>
            <Typography mt={2}>A web app demonstrating a simple admin panel ui for short news app - News2day</Typography>
            <Typography mt={4} component='h2' variant='h5'>Technologies used</Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary='ReactJS'
                        secondary='For creating the ui, state management and api integration'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='MUI'
                        secondary='For pre made compoents, styling and icons'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='React router dom'
                        secondary='For handling client side routing'
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary='D3'
                        secondary='For making graphs and charts'
                    />
                </ListItem>
            </List>
            <Typography variant='h5' component='h2' mt={4}>Approach</Typography>
            <Typography variant='body1' mt={2}>
                The app has been developed by leveraging ReactJS apis, like useContext, createContext, useReducer and custom hooks for managing global state, and useState for local state. React&apos;s component reusability is mainly utilized for componets like graphs and feed tables, thus making code more modular.<br/>
                useEffect hook is used in graph and chart components for effective rerendering the app as state changes.
                <br/><br/>
                React router dom library is used for the client side routing.
            </Typography>
            <Typography variant='h5' component='h2' mt={4}>Credits</Typography>
            <Typography mt={2}>
                Designed and developed by Osama Siddiquee
            </Typography>
            <Typography variant='h5' component='h2' mt={4}>Links</Typography>
            <Typography mt={2}>Github project link - <a target='_blank' rel='noreferrer' href="https://github.com/osSidd/admin-panel">Code</a></Typography>
            <Typography mt={2}>Live link - <a target='_blank' rel='noreferrer' href="https://admin-panel-omega-silk.vercel.app/">Live</a></Typography>
        </Box>
    )
}