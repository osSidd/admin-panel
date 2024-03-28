import {Box, Grid, Paper, Typography} from '@mui/material'
import useFeedContext from '../hooks/useFeedContext'
import ViewStatsCard from '../components/performance/viewStatsCard'
import Graph from '../components/performance/graph'

export default function Performance(){

    const {feed} = useFeedContext()
    const mostViewed = feed.toSorted((a,b) => b.views-a.views)
    const leastViewed = feed.toSorted((a,b) => a.views-b.views)
    
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

    const categoryViews = getMetrics(feed, 'category', 'views')
    const categoryLikes = getMetrics(feed, 'category', 'likes')
    console.log(categoryLikes)
    return(
        <Box display='flex' alignItems='center' justifyContent='space-evenly' flexWrap='wrap' rowGap={5}>
            <Graph feed={categoryViews} category='category' field='views' title='Category vs Views'/>
            <Graph feed={categoryLikes} category='category' field='likes' title='Category vs Likes'/>

            <ViewStatsCard
                title='Top 5 most viewed feeds'
                col1Title='Title'
                col2Title='Views'
                feed={mostViewed}
                rows={5}
                col1Item='title'
                col2Item='views'
            />
            <ViewStatsCard
                title='Top 5 least viewed feeds'
                col1Title='Title'
                col2Title='Views'
                feed={leastViewed}
                rows={5}
                col1Item='title'
                col2Item='views'
            />
        </Box>
    )
}