import { Grid, Paper, Typography} from '@mui/material'
import { Fragment } from 'react'

export default function ViewStatsCard({title, col1Title, col2Title, feed, rows, col1Item, col2Item, width=290}){
    return (
        <Paper sx={{width:width, p:2}}>
            <Typography fontSize={16} textAlign='center'>{title}</Typography>
            <Grid container alignItems='center' mt={2}>
                <Grid item xs={10}>
                    <Typography fontWeight={500} fontSize={14}>{col1Title}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography fontWeight={500} fontSize={14} textAlign='right'>{col2Title}</Typography>
                </Grid>
            {
                feed.slice(0,rows).map(f => (
                        <Fragment key={f.id}>
                        <Grid item xs={9}>
                            <Typography width='90%' textOverflow='ellipsis' overflow='hidden' noWrap>{f[col1Item]}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography textAlign='right' color='panelPrimary.main' fontWeight={600} fontSize={24}>{f[col2Item] >= 10000 ? `${parseInt(f[col2Item]/10000)}K` : f[col2Item]}</Typography>
                        </Grid>
                        </Fragment>
                ))
            }
            </Grid>
        </Paper>
    )
}