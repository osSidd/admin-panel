import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function NewsForm({header}){

    const [category, setCategory] = useState('Politics') 
    return (
        <>
            <Box>
                <Typography component='h2' variant="h2">{header}</Typography>
                <Button variant='outlined' sx={{ml:'auto', display:'block'}}>Mobile preview</Button>
            </Box>
            <Box
                component='form'
                my={5}
            >
                <TextField
                    variant='outlined'
                    label='News title'
                    fullWidth
                />
                <Box sx={{ minWidth: 120 }} mt={3}>
                <FormControl fullWidth>
                    <InputLabel id="select-label">Category</InputLabel>
                    <Select
                    labelId="select-label"
                    id="select"
                    value={category}
                    label="Category"
                    onChange={e => setCategory(e.target.value)}
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
                    />
                </Box>
                <TextField
                    variant='outlined'
                    label='News content'
                    fullWidth
                    multiline
                    rows={10}
                    sx={{mt:3}}
                />
                <Button color='secondary' variant='contained' sx={{mt:4}}>Publish feed</Button>
            </Box>
        </>
    )
}