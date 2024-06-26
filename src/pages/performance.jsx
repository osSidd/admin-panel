import {Box, Grid} from '@mui/material'
import useFeedContext from '../hooks/useFeedContext'
import ViewStatsCard from '../components/performance/viewStatsCard'
import Graph from '../components/performance/graph'
import { useState } from 'react'

export default function Performance(){

    const {feed} = useFeedContext()

    const mostViewed = feed.toSorted((a,b) => b.views-a.views)
    const leastViewed = feed.toSorted((a,b) => a.views-b.views)
    const mostLiked = feed.toSorted((a, b) => b.likes - a.likes)
    const userEngagement = feed.toSorted((a, b) => b.comments - a.comments)
    
    function getMetrics(feed,category, field){
        const categoryObj = {}
        const categories = []
        let count = 0
        feed.forEach(f => {
            if (f.category in categoryObj){
                categoryObj[f[category]] += f[field]
            }
            else{
                categoryObj[f[category]] = f[field]
            }
        })
        for(let i in categoryObj){
            categories.push({id: count, category: i, [field]: categoryObj[i]})
            count++
        }
        return categories
    }

    function toggleVariation(factor){
        switch(factor){
            case 'comments':
                setVariation({field: factor, feed: dateComments, graphColor:'#ffad5f'})
                return
            case 'likes':
                setVariation({field: factor, feed: dateLikes, graphColor:'#28c765'})
                return
            default:
                setVariation({field: 'views', feed: dateViews, graphColor:'#7367f0'})
        }
    }

    const categoryViews = getMetrics(feed, 'category', 'views')
    const categoryLikes = getMetrics(feed, 'category', 'likes')
    const categoryComments = getMetrics(feed, 'category', 'comments')
    const dateViews = getMetrics(feed, 'createdAt', 'views')
    const dateComments = getMetrics(feed, 'createdAt', 'comments')
    const dateLikes = getMetrics(feed, 'createdAt', 'likes')

    const [variation, setVariation] = useState({field: 'views', feed: dateViews, graphColor: '#7367f0'})

    return(
        <Box>
            <Grid mb={4} justifyContent='center' container columnGap={4} rowGap={4}>
                <Grid item xs={12} sm={5}>
                    <Graph feed={categoryViews} category='category' field='views' title='Category vs Views'     graphColor='#7367f0'/>
                </Grid>
                <Grid item xs={12} sm={6}>                    
                    <ViewStatsCard
                        title='Top 5 most viewed feeds'
                        col1Title='Title'
                        col2Title='Views'
                        feed={mostViewed}
                        rows={5}
                        col1Item='title'
                        col2Item='views'
                        col2Color='panelPrimary.main'
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <ViewStatsCard
                        title='Top 5 least viewed feeds'
                        col1Title='Title'
                        col2Title='Views'
                        feed={leastViewed}
                        rows={5}
                        col1Item='title'
                        col2Item='views'
                        col2Color='error.light'
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <Graph feed={variation.feed} category='category' field={variation.field} title={`Variation of ${variation.field}`} graphColor={variation.graphColor} lineGraph={true} toggleVariation={toggleVariation}/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Graph feed={categoryLikes} category='category' field='likes' title='Category vs Likes' graphColor='#28c765'/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ViewStatsCard
                        title='Top 5 most liked feeds'
                        col1Title='Title'
                        col2Title='Likes'
                        feed={mostLiked}
                        rows={5}
                        col1Item='title'
                        col2Item='likes'
                        col2Color='panelPrimary.main'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ViewStatsCard
                        title='High user engagement (comments)'
                        col1Title='Title'
                        col2Title='comments'
                        feed={userEngagement}
                        rows={5}
                        col1Item='title'
                        col2Item='comments'
                        col2Color='info.main'
                        width={350}
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Graph feed={categoryComments} category='category' field='comments' title='Category vs Comments' graphColor='#ffad5f'/>
                </Grid>
            </Grid>
        </Box>
    )
}