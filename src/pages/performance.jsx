import {Box, Grid} from '@mui/material'
import useFeedContext from '../hooks/useFeedContext'
import ViewStatsCard from '../components/performance/viewStatsCard'
import Graph from '../components/performance/graph'
import FeedTable from '../components/feedTable'

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

    // function statusMetrics(feed){
    //     const statusObj = {published: 0, draft: 0}
    //     feed.forEach(f => {
    //         if(f.status === 'Draft') statusObj.draft += 1
    //         else statusObj.published += 1
    //     })
    //     return statusObj
    // }

    const categoryViews = getMetrics(feed, 'category', 'views')
    const categoryLikes = getMetrics(feed, 'category', 'likes')
    const categoryComments = getMetrics(feed, 'category', 'comments')
    const dateViews = getMetrics(feed, 'createdAt', 'views')

    return(
        <Box>
            <Grid mb={4} container columnGap={4} rowGap={4}>
                <Grid item lg={5}>
                    <Graph feed={categoryViews} category='category' field='views' title='Category vs Views'     graphColor='#7367f0'/>
                </Grid>
                <Grid item lg={6}>                    
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
                <Grid item lg={7}>
                    <Graph feed={dateViews} category='category' field='views' title='Variation of Views'     graphColor='#7367f0' lineGraph={true}/>
                </Grid>
                <Grid item lg={4}>
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
                <Grid item lg={6}>
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
                <Grid item lg={5}>
                    <Graph feed={categoryLikes} category='category' field='likes' title='Category vs Likes' graphColor='#28c765'/>
                </Grid>     
                <Grid item lg={5}>
                    <Graph feed={categoryComments} category='category' field='comments' title='Category vs Comments'    graphColor='#ffad5f'/>
                </Grid>
                <Grid item lg={6}>
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
            </Grid>
            <FeedTable
                cols={['title', 'category', 'createdAt', 'views', 'likes', 'comments']}
                actions={{view: true, edit:false, delete: false}}
            />
        </Box>
    )
}